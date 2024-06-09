import { useLinkClickHandler } from "react-router-dom";
import styles from "./SettingsPage.module.css";
import DoubleViewBox from "components/containers/DoubleViewBox/DoubleViewBox";
import Button from "components/base/Button";
import FormInput from "components/inputs/FormInput/FormInput";
import { useState } from "react";
import FormSelector from "components/inputs/FormSelector/FormSelector";

export function SettingsPage() {
    const [profileData, setProfileData] = useState<{[key: string]: any}>({});
	return (
		<DoubleViewBox
			left={
				<>
					<span className={styles.selected}>Редактирование профиля</span>
					<span onClick={useLinkClickHandler("/changePassword")}>
						Изменить пароль
					</span>
					<span onClick={useLinkClickHandler("/changeMail")}>
						Изменить почту
					</span>
				</>
			}
			right={
				<>
					<span className={styles.mainHeader}>Редактирование профиля</span>
					<div className={styles.mainContent}>
                        <FormInput
                            label="Имя"
                            type="text"
                            placeholder="Ваше имя"
                            value={profileData.firstName}
                            onChange={(value) => setProfileData((pred) => ({...pred, firstName: value}))}
                        />
                        <FormInput
                            label="Фамилия"
                            type="text"
                            placeholder="Ваша фамилия"
                            value={profileData.lastName}
                            onChange={(value) => setProfileData((pred) => ({...pred, lastName: value}))}
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
                                }
                            ]}
                            value={profileData.gender}
                            onChange={(value) => setProfileData((pred) => ({...pred, gender: value}))}
                        />
						<Button outlined rounded>
							Сохранить изменения
						</Button>
					</div>
				</>
			}
		/>
	);
}
