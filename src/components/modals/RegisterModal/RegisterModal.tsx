import React, { useState, FormEvent, ChangeEvent } from "react";
import styles from "./RegisterModal.module.css";
import Modal from "components/containers/Modal/Modal";
import Button from "components/base/Button";
import FormInput from "components/inputs/FormInput/FormInput";
import { formatPath } from "api/utils";
import { toast } from 'react-toastify';

type RegisterModalProps = {
	onChange: () => void;
	onAuthModal: () => void;
};

const RegisterModal = ({ onChange, onAuthModal }: RegisterModalProps) => {
	const [usernameValue, setUsernameChange] = useState("");
	const [passwordValue, setPasswordChange] = useState("");
	const [emailValue, setEmailChange] = useState("");
	const [warning, setWarning] = useState(false);

	async function handleSubmit(event: FormEvent) {
		event.preventDefault();
		const response = await fetch(formatPath("/api/v1/auth/register/"), {
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
		});
		if (response.status === 201) {
			onChange();
            toast("Вы успешно зарегистрировались!", {
                type: "success",
            });
		} else {
			setWarning(true);
            toast("Ошибка при регистрации", {
                type: "error",
            });
		}
	}

	function handleUsernameChange(value: string) {
		setUsernameChange(value);
	}

	function handlePasswordChange(value: string) {
		setPasswordChange(value);
	}

	function handleEmailChange(value: string) {
		setEmailChange(value);
	}

	return (
		<Modal title="Регистрация" isOpen onClose={onChange}>
			<div className={styles.containerForm}>
				<form className={styles.formsModal} onSubmit={handleSubmit}>
					<FormInput
						label="Эл. почта"
						value={emailValue}
						onChange={handleEmailChange}
						type="email"
						style={{ width: "90%", alignSelf: "center" }}
					/>
					<FormInput
						label="Имя"
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

					<Button
						stretched
						rounded
						type="submit"
						size="small"
						style={{
							width: "95%",
							alignSelf: "center",
							backgroundColor: "#3940c1",
						}}
					>
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
				<Button
					stretched
					rounded
					type="submit"
					size="small"
					style={{ width: "95%", alignSelf: "center" }}
					onClick={function () {
						onChange();
						onAuthModal();
					}}
				>
					Вход
				</Button>
			</div>
		</Modal>
	);
};

export default RegisterModal;
