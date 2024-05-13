import { useLinkClickHandler } from 'react-router-dom';
import styles from './settingspage.module.css';

export function SettingsPage() {

    return (
    <div className={styles.page}>
      <div className={styles.container}>
        <div></div>
        <div className={styles.layoutLeft}>
            <a className={styles.selected}>Редактирование профиля</a>
            <a onClick={useLinkClickHandler("/changePassword")}>Изменить пароль</a>
            <a onClick={useLinkClickHandler("/changeMail")}>Изменить почту</a>
        </div>
        <div className={styles.layoutRight}>
            <a className={styles.mainHeader}>Редактирование профиля</a>
            <svg className={styles.lineSvg} viewBox="0 0 878 2"  fill="none" xmlns="http://www.w3.org/2000/svg">
<line x1="-0.00732422" y1="1" x2="1000001" y2="1" stroke="black"/>
</svg>      

            <div className={styles.mainContent}>
                <a>имя</a>
                <textarea className={styles.textareaName}></textarea>
            </div>
            <svg className={styles.lineSvg} viewBox="0 0 878 2" fill="none" xmlns="http://www.w3.org/2000/svg">
<line x1="-0.00732422" y1="1" x2="1000001" y2="1" stroke="black"/>
</svg>      
            <button className={styles.saveButton}>Сохранить изменения</button>
        </div>
        
      </div>
    </div>
    );
  }
  