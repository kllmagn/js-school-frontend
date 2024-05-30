import styles from "./profilepage.module.css";
import avatar from "../Header/Profile/placeholder.png";
import avatarAlt from "./avatarChange.png";
import { useLinkClickHandler } from "react-router-dom";
import { useMeData } from "../hooks/useMeData";
import { useState } from "react";
import { ModalChangeAvatar } from "./ModalChangeAvatar/ModalChangeAvatar";

export function ProfilePage() {
	const [userData] = useMeData();

    const [imageSrc, setImageSrc] = useState(avatar); 
    const [isModalOpen, setModalOpen] = useState(false); 

    const onChange = () => {
        setModalOpen(!isModalOpen);
    }

    const handleMouseEnter = () => {
        setImageSrc(avatarAlt); 
    };

    const handleMouseLeave = () => {
        setImageSrc(avatar); 
    };
	return (
        <div className={styles.layout}>
            {isModalOpen && <ModalChangeAvatar onChange={onChange}></ModalChangeAvatar>}
        <div className={styles.container}>
            
            <div className={styles.layoutLeft}>
                <div className={styles.avatarContainer}>
                    <img className={styles.avatarImg} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} src={imageSrc} onClick={onChange}></img>
                </div>
                
                <a
                    className={styles.settings}
                    onClick={useLinkClickHandler("/settings")}
                >
                    Настройки
                </a>
            </div>
            <div className={styles.layoutRight}>
                <a className={styles.username}>
                    {userData ? userData.username : "Лунтик"}
                </a>
                <a className={styles.ratingHeader}>Рейтинг: #123234</a>
                <div className={styles.readyTasksContainer}>
                <a className={styles.readyTasksHeader}> Решенные задачи </a>

              
                <div className={styles.readyTasks}>
                    <a>Задание 1 - делаем игру 2024</a>
                    <a>Задание 2 - делаем игру 2024</a>
                </div>
                </div>
            </div>
        </div>
        </div>
	);
}
