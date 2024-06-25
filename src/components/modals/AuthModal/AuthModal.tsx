import { ChangeEvent, FormEvent, useState } from "react";
import styles from "./AuthModal.module.css";
import React from "react";
import { useDispatch } from "react-redux";
import { setTokenAccess, setTokenRefresh } from "store/token/token.slice";
import Modal from "components/containers/Modal/Modal";
import Button from "components/base/Button";
import FormInput from "components/inputs/FormInput/FormInput";
import { formatPath } from "api/utils";
import { useLinkClickHandler } from "react-router-dom";

type AuthModalProps = {
	onChange: () => void;
	onRegistModal: () => void;
};

type ResponseDetail = {
	detail: "No active account found with the given credentials";
};

type ResponseOK = { refresh: string; access: string };

const AuthModal = ({ onChange, onRegistModal }: AuthModalProps) => {
	const [usernameValue, setUsernameChange] = useState("");
	const [passwordValue, setPasswordChange] = useState("");
	const [warning, setWarning] = useState(false);
	const dispatch = useDispatch();

	async function handleSubmit(event: FormEvent) {
		event.preventDefault();
		const response = await fetch(formatPath("/api/v1/auth/token/"), {
			method: "POST", // or 'PUT'
			headers: {
				accept: "application/json",
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				username: usernameValue,
				password: passwordValue,
			}),
		});
		if (response.status === 200) {
			let data: ResponseOK = JSON.parse(await response.text());
			dispatch(setTokenAccess(data.access));
			dispatch(setTokenRefresh(data.refresh));
			onChange();
		} else {
			let data: ResponseDetail = JSON.parse(await response.text());
			console.log("error while making response, detail:", data.detail);
			setWarning(true);
		}
	}

	function handleUsernameChange(value: string) {
		setUsernameChange(value);
	}

	function handlePasswordChange(value: string) {
		setPasswordChange(value);
	}

	return (
		<Modal title="Вход" isOpen onClose={onChange}>
			<div className={styles.containerForm}>
				<form className={styles.formsModal} onSubmit={handleSubmit}>
					<FormInput
						label="Логин"
						value={usernameValue}
						onChange={handleUsernameChange}
						type="text"
						style={{ width: "90%", alignSelf: "center" }}
					/>
					<FormInput
						label="Пароль"
						value={passwordValue}
						onChange={handlePasswordChange}
						type="password"
						style={{ width: "90%", alignSelf: "center" }}
					/>
					{warning && (
						<div className={styles.warningContainer}>
							<span className={styles.warning}>Неверный логин или пароль</span>
						</div>
					)}
					<Button
						rounded
						stretched
						type="submit"
						size="small"
						style={{ width: "95%", alignSelf: "center" }}
					>
						Войти
					</Button>
				</form>
				<div className={styles.gavnoContainer}>
					<span
						className={styles.gavno}
						onClick={function () {
							onChange();
							onRegistModal();
						}}
					>
						Регистрация
					</span>
					<span className={styles.gavno}>Забыли пароль?</span>
				</div>
			</div>
		</Modal>
	);
};

export default AuthModal;
