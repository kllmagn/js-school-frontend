import { useLinkClickHandler } from "react-router-dom";
import styles from "./changemailpage.module.css";

export function ChangeMailPage() {
	return (
        <div className={styles.container}>
            <div></div>
            <div className={styles.layoutLeft}>
                <a onClick={useLinkClickHandler("/settings")}>
                    Редактирование профиля
                </a>
                <a onClick={useLinkClickHandler("/changePassword")}>
                    Изменить пароль
                </a>
                <a className={styles.selected}>Изменить почту</a>
            </div>
            <div className={styles.layoutRight}>
                <a className={styles.mainHeader}>Изменить почту</a>
                <form  className={styles.form}>
                    <div className={styles.mainContent}>
                        <a>текущая почта</a>
                        <input className={styles.inputName}></input>
                        <a>новая почта</a>
                        <input className={styles.inputName}></input>
                        <button className={styles.saveButton}>Сохранить изменения</button>
                    </div>
                </form>

            </div>
        </div>
	);
}
