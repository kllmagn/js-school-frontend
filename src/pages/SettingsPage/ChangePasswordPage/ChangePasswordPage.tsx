import { useLinkClickHandler } from "react-router-dom";
import styles from "./ChangePasswordPage.module.css";
import { useState, FormEvent, ChangeEvent } from "react";
import {
	accessTokenSelector,
	refreshTokenSelector,
} from "store/token/token.selector";
import { useDispatch, useSelector } from "react-redux";
import { setTokenAccess } from "store/token/token.slice";
import Button from "components/base/Button";
import DoubleViewBox from "components/containers/DoubleViewBox/DoubleViewBox";
import FormInput from "components/inputs/FormInput/FormInput";

export function ChangePasswordPage() {
	const [newPasswordValue, setNewPasswordValue] = useState("");
	const [passwordValue, setPasswordChange] = useState("");
	const [passwordConfirmation, setPasswordConfirmation] = useState("");
	const tokenAccess = useSelector(accessTokenSelector);
	const tokenRefresh = useSelector(refreshTokenSelector);
	const dispatch = useDispatch();
    const [warning, setWarning] = useState("");

    async function changePassword () {
      
        const response = await fetch(
			"http://localhost:8000/api/v1/users/me/password/",
			{
				method: "POST", // or 'PUT'
				headers: {
					accept: "application/json",
					"Content-Type": "application/json",
					Authorization: `Bearer ${tokenAccess}`,
				},
				body: JSON.stringify({
					old_password: passwordValue,
					new_password: newPasswordValue,
					confirm_password: passwordConfirmation,
				}),
			},
		);
		if (response.status === 401 && tokenAccess !== null) {
			const responseRefresh = await fetch(
				"http://localhost:8000/api/v1/profile/token/refresh/",
				{
					method: "POST", // or 'PUT'
					headers: {
						accept: "application/json",
						"Content-Type": "application/json",
						Authorization: `Bearer ${tokenAccess}`,
					},
					body: JSON.stringify({
						refresh: tokenRefresh,
					}),
				},
			);
			let data: string = JSON.parse(await responseRefresh.text());
			dispatch(setTokenAccess(data));
		}
        if (response.status === 400 && tokenAccess !== null) {
            setWarning('Ваш пароль не совпадает со старым или введен неверный формат данных: пароль должен состоять из минимум 1 буквы или цифры, одной буквы заглавной или маленькой и общей длиной минимум 8 символов')
        }

    };
	 
    
    function handleSubmit(event: FormEvent) {
		event.preventDefault();
        if((passwordValue === "") || (newPasswordValue === "")|| (passwordConfirmation === "")) {
            setWarning('Необходимо заполнить все поля');
            console.log(warning);
        }
        else if (passwordConfirmation !== newPasswordValue) {
            setWarning('Новый пароль не совпадает с повторным');
            console.log(warning);
        }
        else if ((newPasswordValue === passwordValue) && (newPasswordValue !== "") ){
            setWarning('Старый пароль совпадает с новым');
            console.log(warning);
        }
        else {
            changePassword();
            console.log(warning);
        }
		
	};

   

	return (
        <DoubleViewBox 
        left={
            <div className={styles.leftContent}>
				<span onClick={useLinkClickHandler("/settings")}>
					Редактирование профиля
				</span>
				<span className={styles.selected}>Изменить пароль</span>
				<span onClick={useLinkClickHandler("/changeMail")}>Изменить почту</span>
			</div>
        }
		right={<div className={styles.rightContent}>
        <span className={styles.mainHeader}>Изменить пароль</span>
        <form onSubmit={handleSubmit} className={styles.mainContent}>
                <FormInput
                    label="Текущий пароль"
                    type="password"
                    placeholder="Введите пароль"
                    value={passwordValue}
                    onChange={(value) => setPasswordChange(value)}
                    
                />
                 <FormInput
                    label="Новый пароль"
                    type="password"
                    placeholder="Введите пароль"
                    value={newPasswordValue}
                    onChange={(value) => setNewPasswordValue(value)}
                />

                <FormInput
                    label="Повторите пароль"
                    type="password"
                    placeholder="Введите пароль"
                    value={passwordConfirmation}
                    onChange={(value) => setPasswordConfirmation(value)}
                />
                {!(warning === '') && <a className={styles.warning}>{warning}</a>}


                <Button outlined rounded style={{width: '20%', fontSize:'16px', height:'40px'}}>
							Сохранить изменения 
                </Button>
                
        </form>
    </div>}
			
			
        />
	);
}
