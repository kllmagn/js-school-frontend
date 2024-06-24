
import AvatarUpload from "components/inputs/AvatarUpload";
import styles from "./ProfileLeftPart.module.css";
import { useLinkClickHandler } from "react-router-dom";
import { useState } from "react";
import avatar from "icons/placeholder.png";

export const ProfileLeftPart = () => {
    const [imageSrc, setImageSrc] = useState(avatar);
    
    
    return (
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

);
};
