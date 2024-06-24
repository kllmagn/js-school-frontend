
import AvatarUpload from "components/inputs/AvatarUpload";
import styles from "./ProfileLeftPart.module.css";
import { useLinkClickHandler } from "react-router-dom";
import { useState } from "react";
import avatar from "icons/placeholder.png";
import { useMeData } from "hooks/useMeData";

export const ProfileLeftPart = () => {
    const [data] = useMeData();

    
    
    
    return (
        <>
        <div className={styles.avatarContainer}>
            <AvatarUpload backgroundSrc={data?.avatar} />
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
