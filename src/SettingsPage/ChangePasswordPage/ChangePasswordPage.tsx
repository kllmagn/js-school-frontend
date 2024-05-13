import { useLinkClickHandler } from 'react-router-dom';
import styles from './changepasswordpage.module.css';
import { useState, FormEvent, ChangeEvent } from 'react';
import { accessTokenSelector, refreshTokenSelector} from '../../redux/token/token.selector';
import { useDispatch, useSelector } from 'react-redux';
import { setTokenAccess } from '../../redux/token/token.slice';


export function ChangePasswordPage() {
    const [newPasswordValue, setNewPasswordValue] = useState('');
    const [passwordValue, setPasswordChange] = useState('');
    const [passwordConfirmation, setPasswordConfirmation] = useState('');
    const tokenAccess = useSelector(accessTokenSelector);
    const tokenRefresh = useSelector(refreshTokenSelector);
    const dispatch = useDispatch();
    async function handleSubmit(event: FormEvent){
        event.preventDefault();
        const response = await fetch("http://localhost:8000/api/v1/profile/password/", {
        method: "POST", // or 'PUT'
        headers: {
            "accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": `Bearer ${tokenAccess}`
        },
        body: JSON.stringify({
            "old_password": passwordValue,
            "new_password": newPasswordValue,
            "confirm_password": passwordConfirmation
        }),
        });
        if (response.status === 401 && tokenAccess !== null) {
            const responseRefresh = await fetch("http://localhost:8000/api/v1/profile/token/refresh/", {
                method: "POST", // or 'PUT'
                headers: {
                    "accept": "application/json",
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${tokenAccess}`
                },
                body: JSON.stringify({
                    "refresh": tokenRefresh,
                }),
                });
            let data: string = JSON.parse(await responseRefresh.text());
            dispatch(setTokenAccess(data));
            
        }
    }
    

    function handleNewPasswordChange(event: ChangeEvent<HTMLTextAreaElement>){
        setNewPasswordValue(event.target.value);
    }

    function handlePasswordChange(event: ChangeEvent<HTMLTextAreaElement>){
        setPasswordChange(event.target.value);
    }

    function handlePasswordConfirmation(event: ChangeEvent<HTMLTextAreaElement>){
        setPasswordConfirmation(event.target.value);
    }
  

    return (
    <div className={styles.page}>
      <div className={styles.container}>
        <div></div>
        <div className={styles.layoutLeft}>
            <a onClick={useLinkClickHandler("/settings")}>Редактирование профиля</a>
            <a className={styles.selected}>Изменить пароль</a>
            <a onClick={useLinkClickHandler("/changeMail")}>Изменить почту</a>
        </div>
        <div className={styles.layoutRight}>
            <a className={styles.mainHeader}>Изменить пароль</a>
            <svg className={styles.lineSvg} viewBox="0 0 878 2"  fill="none" xmlns="http://www.w3.org/2000/svg">
<line x1="-0.00732422" y1="1" x2="1000001" y2="1" stroke="black"/>
</svg>      
            <form onSubmit={handleSubmit}>
                <div className={styles.mainContent}>
                    <a>текущий пароль</a>
                    <textarea className={styles.textareaName} value={passwordValue} onChange={handlePasswordChange}></textarea>
                </div>
                <div className={styles.mainContent}>
                    <a>новый пароль</a>
                    <textarea className={styles.textareaName} value={newPasswordValue} onChange={handleNewPasswordChange}></textarea>
                </div>
                <div className={styles.mainContent}>
                    <a>повторите пароль</a>
                    <textarea className={styles.textareaName} value={passwordConfirmation} onChange={handlePasswordConfirmation}></textarea>
                </div>
                <svg className={styles.lineSvg} viewBox="0 0 878 2" fill="none" xmlns="http://www.w3.org/2000/svg">
    <line x1="-0.00732422" y1="1" x2="1000001" y2="1" stroke="black"/>
</svg>      
                <button className={styles.saveButton}>Сохранить изменения</button>
            </form>
        </div>
        
      </div>
    </div>
    );
  }
  