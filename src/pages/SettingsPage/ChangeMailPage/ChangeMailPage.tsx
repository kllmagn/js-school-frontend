import { useLinkClickHandler } from "react-router-dom";
import styles from "./ChangeMailPage.module.css";
import Button from "components/base/Button";

export function ChangeMailPage() {
	return (
		<div className={styles.container}>
			<div></div>
			<div className={styles.layoutLeft}>
				<span onClick={useLinkClickHandler("/settings")}>
					Редактирование профиля
				</span>
				<span onClick={useLinkClickHandler("/changePassword")}>
					Изменить пароль
				</span>
				<span className={styles.selected}>Изменить почту</span>
			</div>
			<div className={styles.layoutRight}>
				<span className={styles.mainHeader}>Изменить почту</span>
				<form className={styles.form}>
					<div className={styles.mainContent}>
						<span>текущая почта</span>
						<input className={styles.inputName}></input>
						<span>новая почта</span>
						<input className={styles.inputName}></input>
						<Button outlined rounded>
							Сохранить изменения
						</Button>
					</div>
				</form>
			</div>
		</div>
	);
}
