import { useLinkClickHandler } from "react-router-dom";
import styles from "./settingspage.module.css";

export function SettingsPage() {
	return (
        <div className={styles.container}>
            <div></div>
            <div className={styles.layoutLeft}>
                <a className={styles.selected}>Редактирование профиля</a>
                <a onClick={useLinkClickHandler("/changePassword")}>
                    Изменить пароль
                </a>
                <a onClick={useLinkClickHandler("/changeMail")}>Изменить почту</a>
            </div>
            <div className={styles.layoutRight}>
                <a className={styles.mainHeader}>Редактирование профиля</a>
               

                <div className={styles.mainContent}>
                    <a>имя*</a>
                    <input className={styles.inputName}></input>
                    <a>фамилия</a>
                    <input className={styles.inputName}></input>
                    <a>пол</a>
                    <select id="sex" name="sex">
                    <option value="мужской">мужской</option>
                    <option value="женский">женский</option>
                    <option value="нейросеть">нейросеть</option>
                    </select>

                    <button className={styles.saveButton}>Сохранить изменения</button>
                    
                </div>
                
                
                 
                
        
            </div>
        </div>
	);
}
