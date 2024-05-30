import { useLinkClickHandler } from "react-router-dom";
import styles from "./changepasswordpage.module.css";
import { useState, FormEvent, ChangeEvent } from "react";
import {
	accessTokenSelector,
	refreshTokenSelector,
} from "../../redux/token/token.selector";
import { useDispatch, useSelector } from "react-redux";
import { setTokenAccess } from "../../redux/token/token.slice";

export function ChangePasswordPage() {
	const [newPasswordValue, setNewPasswordValue] = useState("");
	const [passwordValue, setPasswordChange] = useState("");
	const [passwordConfirmation, setPasswordConfirmation] = useState("");
	const tokenAccess = useSelector(accessTokenSelector);
	const tokenRefresh = useSelector(refreshTokenSelector);
	const dispatch = useDispatch();
	async function handleSubmit(event: FormEvent) {
		event.preventDefault();
		const response = await fetch(
			"http://localhost:8000/api/v1/profile/password/",
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
	}

	function handleNewPasswordChange(event: ChangeEvent<HTMLInputElement>) {
		setNewPasswordValue(event.target.value);
	}

	function handlePasswordChange(event: ChangeEvent<HTMLInputElement>) {
		setPasswordChange(event.target.value);
	}

	function handlePasswordConfirmation(event: ChangeEvent<HTMLInputElement>) {
		setPasswordConfirmation(event.target.value);
	}

	return (
        <div className={styles.container}>
            <div></div>
            <div className={styles.layoutLeft}>
                <a onClick={useLinkClickHandler("/settings")}>
                    Редактирование профиля
                </a>
                <a className={styles.selected}>Изменить пароль</a>
                <a onClick={useLinkClickHandler("/changeMail")}>Изменить почту</a>
            </div>
            <div className={styles.layoutRight}>
                <a className={styles.mainHeader}>Изменить пароль</a>

                <form onSubmit={handleSubmit} className={styles.form}>
                    <div className={styles.mainContent}>
                        <a>текущий пароль</a>
                        <input
                            className={styles.inputName}
                            value={passwordValue}
                            onChange={handlePasswordChange}
                        ></input>
                        <a>новый пароль</a>
                        <input
                            className={styles.inputName}
                            value={newPasswordValue}
                            onChange={handleNewPasswordChange}
                        ></input>
                        <a>повторите пароль</a>
                        <input
                            className={styles.inputName}
                            value={passwordConfirmation}
                            onChange={handlePasswordConfirmation}
                        ></input>
                        <button className={styles.saveButton}>Сохранить изменения</button>
                    </div>
                  
                    
                </form>
            </div>
        </div>
	);
}
