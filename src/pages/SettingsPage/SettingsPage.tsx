import { useLinkClickHandler, useParams } from "react-router-dom";
import styles from "./SettingsPage.module.css";
import DoubleViewBox from "components/containers/DoubleViewBox/DoubleViewBox";
import Button from "components/base/Button";
import FormInput from "components/inputs/FormInput/FormInput";
import { FormEvent, useEffect, useState } from "react";
import FormSelector from "components/inputs/FormSelector/FormSelector";
import { useMeData } from "hooks/useMeData";
import { AnimationSkeleton } from "components/skeletons/AnimationSkeleton/AnimationSkeleton";

export function SettingsPage() {
	const { username } = useParams();
	const [profileData, setProfileData] = useState<{ [key: string]: any }>({});
	const [warning, setWarning] = useState("");

	const passwordClickHandler = useLinkClickHandler<HTMLDivElement>(
		`/${username}/settings/password`,
	);

	function handleSubmit(event: FormEvent) {
		event.preventDefault();
		if (profileData.firstName === "") {
			setWarning("Необходимо заполнить поле с именем");
		}
	}
	return (
		<DoubleViewBox
			left={
				<div className={styles.leftContent}>
					<span className={styles.selected}>Редактирование профиля</span>
					<span onClick={passwordClickHandler}>Изменить пароль</span>
				</div>
			}
			right={
				<div className={styles.rightContent}>
					<span className={styles.mainHeader}>Редактирование профиля</span>
					<form onSubmit={handleSubmit} className={styles.mainContent}>
						<FormInput
							label="Имя"
							type="text"
							placeholder="Ваше имя"
							value={profileData.firstName}
							onChange={(value) =>
								setProfileData((pred) => ({ ...pred, firstName: value }))
							}
							defaultValue={username}
						/>

						<FormInput
							label="Фамилия (необязательно)"
							type="text"
							placeholder="Ваша фамилия"
							value={profileData.lastName}
							onChange={(value) =>
								setProfileData((pred) => ({ ...pred, lastName: value }))
							}
						/>
						<FormSelector
							label="Пол"
							placeholder="Ваш пол"
							options={[
								{
									value: "male",
									label: "Мужской",
								},
								{
									value: "female",
									label: "Женский",
								},
								{
									value: "pig",
									label: "Морская свинка",
								},
								{
									value: "neural",
									label: "Нейросеть",
								},
							]}
							value={profileData.gender}
							onChange={(value) =>
								setProfileData((pred) => ({ ...pred, gender: value }))
							}
						/>
						{!(warning === "") && <a className={styles.warning}>{warning}</a>}

						<Button
							outlined
							rounded
							style={{
								width: "20%",
								fontSize: "16px",
								height: "40px",
								minWidth: "200px",
							}}
						>
							Сохранить изменения
						</Button>
					</form>
				</div>
			}
		/>
	);
}
