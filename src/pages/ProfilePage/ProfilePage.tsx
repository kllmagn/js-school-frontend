import styles from "./ProfilePage.module.css";
import avatar from "icons/placeholder.png";
import avatarAlt from "icons/avatarChange.png";
import { useLinkClickHandler } from "react-router-dom";
import { useMeData } from "hooks/useMeData";
import { useState } from "react";
import AvatarUpload from "components/inputs/AvatarUpload/AvatarUpload";
import DoubleViewBox from "components/containers/DoubleViewBox/DoubleViewBox";

export const ProfilePage = () => {
	const [userData] = useMeData();

	const [imageSrc, setImageSrc] = useState(avatar);
	return (
        <DoubleViewBox
            left={
                <>
                    <div className={styles.avatarContainer}>
                        <AvatarUpload backgroundSrc={imageSrc} />
                    </div>

                    <span
                        className={styles.settings}
                        onClick={useLinkClickHandler("/settings")}
                    >
                        Настройки
                    </span>
                </>
            }
            right={
                <>
                    <span className={styles.username}>
                        {userData ? userData.username : "Лунтик"}
                    </span>
                    <span className={styles.ratingHeader}>Рейтинг: #123234</span>
                    <div className={styles.readyTasksContainer}>
                        <span className={styles.readyTasksHeader}> Решенные задачи </span>

                        <div className={styles.readyTasks}>
                            <span>Задание 1 - делаем игру 2024</span>
                            <span>Задание 2 - делаем игру 2024</span>
                        </div>
                    </div>
                </>
            }
        />
	);
};
