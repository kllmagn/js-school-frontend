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
				<span onClick={useLinkClickHandler("/settings")}>
					Редактирование профиля
				</span>
				<span className={styles.selected}>Изменить пароль</span>
				<span onClick={useLinkClickHandler("/changeMail")}>Изменить почту</span>
			</div>
			<div className={styles.layoutRight}>
				<span className={styles.mainHeader}>Изменить пароль</span>

				<form onSubmit={handleSubmit} className={styles.form}>
					<div className={styles.mainContent}>
						<span>текущий пароль</span>
						<input
							className={styles.inputName}
							value={passwordValue}
							onChange={handlePasswordChange}
						></input>
						<span>новый пароль</span>
						<input
							className={styles.inputName}
							value={newPasswordValue}
							onChange={handleNewPasswordChange}
						></input>
						<span>повторите пароль</span>
						<input
							className={styles.inputName}
							value={passwordConfirmation}
							onChange={handlePasswordConfirmation}
						></input>
						<Button outlined rounded>
							Сохранить изменения
						</Button>
					</div>
				</form>
			</div>
		</div>
	);
}
