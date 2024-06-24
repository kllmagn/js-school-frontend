import { useLinkClickHandler } from "react-router-dom";
import styles from "./ChangeMailPage.module.css";
import Button from "components/base/Button";
import DoubleViewBox from "components/containers/DoubleViewBox/DoubleViewBox";
import FormInput from "components/inputs/FormInput/FormInput";
import { useState } from "react";

export function ChangeMailPage() {
    const [currentMail, setCurrentMail] = useState("");
	const [newMail, setNewMail] = useState("");

	return (
        <DoubleViewBox 
        left={
            <div className={styles.leftContent}>
				<span onClick={useLinkClickHandler("/settings")}>
					Редактирование профиля
				</span>
				<span onClick={useLinkClickHandler("/changePassword")}>
					Изменить пароль
				</span>
				<span className={styles.selected}>Изменить почту</span>
			</div>
        }
        right={
            <div className={styles.rightContent}>
				<span className={styles.mainHeader}>Изменить почту</span>
				<form className={styles.mainContent}>
                <FormInput
                    label="Текущая почта"
                    type="email"
                    placeholder="Введите текущую почту"
                    value={currentMail}
                    onChange={(value) => setCurrentMail(value)}
                />

                <FormInput
                    label="Новая почта"
                    type="email"
                    placeholder="Введите новую почту"
                    value={newMail}
                    onChange={(value) => setNewMail(value)}
                />

                <Button outlined rounded style={{width: '20%', fontSize:'16px', height:'40px'}}>
							Сохранить изменения 
                </Button>
				</form>
			</div>
        }
        />
	);
}
