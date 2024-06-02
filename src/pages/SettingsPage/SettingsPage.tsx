import { useLinkClickHandler } from "react-router-dom";
import styles from "./SettingsPage.module.css";
import DoubleViewBox from "components/containers/DoubleViewBox/DoubleViewBox";
import Button from "components/base/Button";

export function SettingsPage() {
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
						<span>имя*</span>
						<input className={styles.inputName}></input>
						<span>фамилия</span>
						<input className={styles.inputName}></input>
						<span>пол</span>
						<select id="sex" name="sex">
							<option value="мужской">мужской</option>
							<option value="женский">женский</option>
							<option value="нейросеть">нейросеть</option>
						</select>

						<Button outlined rounded>
							Сохранить изменения
						</Button>
					</div>
				</>
			}
		/>
	);
}
