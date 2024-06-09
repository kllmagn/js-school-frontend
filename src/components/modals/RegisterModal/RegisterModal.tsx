import React, { useState, FormEvent, ChangeEvent } from "react";
import styles from "./RegisterModal.module.css";
import Modal from "components/containers/Modal/Modal";
import Button from "components/base/Button";
import FormInput from "components/inputs/FormInput/FormInput";

type RegisterModalProps = {
	onChange: () => void;
};

const RegisterModal = ({ onChange }: RegisterModalProps) => {
	const [usernameValue, setUsernameChange] = useState("");
	const [passwordValue, setPasswordChange] = useState("");
	const [warning, setWarning] = useState(false);

	async function handleSubmit(event: FormEvent) {
		event.preventDefault();
		const response = await fetch(
			"http://localhost:8000/api/v1/profile/register/",
			{
				method: "POST", // or 'PUT'
				headers: {
					accept: "application/json",
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					username: usernameValue,
					password: passwordValue,
					password2: passwordValue,
				}),
			},
		);
		if (response.status === 201) {
			onChange();
		} else {
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
		<Modal title="Регистрация" isOpen onClose={onChange}>
			<div className={styles.containerForm}>
				<form className={styles.formsModal} onSubmit={handleSubmit}>
					<FormInput
						label="Эл. почта"
						value={usernameValue}
						onChange={handleUsernameChange}
						type="text"
					/>
					<FormInput
						label="Пароль"
						value={passwordValue}
						onChange={handlePasswordChange}
						type="password"
					/>
					<Button mode="danger" stretched rounded type="submit" size="small">
						Зарегистрироваться
					</Button>
				</form>
				{warning && (
					<div className={styles.warningContainer}>
						<span className={styles.warning}>
							Имя пользователя может состоять только из латинских букв и цифр.
							Ваш пароль должен состоять минимум из 8 символов и 1 буквы
						</span>
					</div>
				)}
				<Button stretched rounded type="submit" size="small">
					Вход
				</Button>
			</div>
		</Modal>
	);
};

export default RegisterModal;
