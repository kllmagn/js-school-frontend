import styles from "./profile.module.css";
import avatar from './placeholder.png';
import { DropMenu } from "./Dropmenu/DropMenu";
import { useCallback, useEffect, useState } from "react";

import icoArrow from './arrow.svg';
import { createPortal } from "react-dom";
import { RegistrationModal } from "../../modals/RegistrationModal/RegistrationModal";
import { AuthorizationModal } from "../../modals/authorization/AuthorizationModal";import { useSelector } from "react-redux";
import { accessTokenSelector } from "../../redux/token/token.selector";
import { useMeData } from "../../hooks/useMeData";
;
export const modalList = document.getElementById('modalList');


const Profile = () => {
    const [userData] = useMeData();
    const tokenAccess = useSelector(accessTokenSelector);
    const [isDropdownShown, setIsDropdownShown] = useState(false);
    const [isMouseEnter, setMouseEnter] = useState(false);
    const handleMouseEnter = () => {
        setMouseEnter(!isMouseEnter);
    };
    const handleClickProfile = useCallback(() => {
        setIsDropdownShown(!isDropdownShown);
    }, [setIsDropdownShown, isDropdownShown]);
    const userClass = styles.user;

    const [isModalRegistOpen, setModalRegistOpen] = useState(false);
    const handleClickRegistration = () => {
        setModalRegistOpen(!isModalRegistOpen);
    };

    const [isModalAuthorizOpen, setModalAuthorizOpen] = useState(false);
    const handleClickAuthoriz = () => {
        setModalAuthorizOpen(!isModalAuthorizOpen);
    };

    if (!modalList) return null;

    
    return (
        <div>

            {tokenAccess && 
            <div className={styles.user} onMouseEnter={handleMouseEnter}>
                    <img className={styles.avatar} src={avatar}></img>
                    <a> {userData ? userData.username : 'Лунтик'} </a>
                    <img className={styles.arrowClicked} src={icoArrow}/> 
            </div>}
            
            {isMouseEnter && <DropMenu handleMouseEnter={handleMouseEnter} />}
            
            {!tokenAccess && <div className={userClass}>
                <button className={styles.logButton} onClick={handleClickRegistration}>
                    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M24.7056 25.4917C24.4583 21.375 21.65 17.95 17.8528 16.7861C20.1528 15.7111 21.75 13.375 21.75 10.6667C21.75 6.93891 18.7278 3.91669 15 3.91669C11.2722 3.91669 8.25 6.93891 8.25 10.6667C8.25 13.375 9.84722 15.7111 12.15 16.7861C8.35278 17.95 5.54445 21.375 5.29722 25.4917C5.27778 25.8111 5.53056 26.0834 5.85278 26.0834C6.14445 26.0834 6.38889 25.8556 6.40834 25.5639C6.67222 21.05 10.4194 17.4722 15 17.4722C19.5806 17.4722 23.3278 21.05 23.5944 25.5639C23.6111 25.8556 23.8556 26.0834 24.15 26.0834C24.4722 26.0834 24.725 25.8111 24.7056 25.4917ZM9.36111 10.6667C9.36111 7.5528 11.8861 5.0278 15 5.0278C18.1139 5.0278 20.6389 7.5528 20.6389 10.6667C20.6389 13.7806 18.1139 16.3056 15 16.3056C11.8861 16.3056 9.36111 13.7806 9.36111 10.6667Z" fill="white" fill-opacity="0.97"/>
                    </svg>
                    <a>Регистрация</a>
                </button>
                <button className={styles.logButton} onClick={handleClickAuthoriz}>
                    <svg width="17" height="17" viewBox="0 0 30 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M-1.51104e-05 15.499C-1.51104e-05 14.8233 0.471604 14.2828 1.04735 14.2828H20.1756L15.4226 8.76356C15.0122 8.28703 15.0122 7.51178 15.4226 7.03525C15.833 6.55872 16.5006 6.55872 16.911 7.03525L23.4524 14.6384C23.8628 15.1149 23.8628 15.8902 23.4524 16.3667L16.911 23.9627C16.7088 24.1974 16.4393 24.3183 16.1698 24.3183C15.9004 24.3183 15.6309 24.1974 15.4287 23.9627C15.0184 23.4862 15.0184 22.7109 15.4287 22.2344L20.1817 16.7152H1.05348C0.471605 16.7152 -1.51104e-05 16.1747 -1.51104e-05 15.499Z" fill="white" fill-opacity="0.97"/>
                        <path d="M27.8991 29.2827V1.71518C27.8991 1.0395 28.3708 0.498962 28.9465 0.498962C29.5284 0.498962 30 1.04662 30 1.71518V29.2827C30 29.9584 29.5284 30.499 28.9465 30.499C28.3708 30.499 27.8991 29.9584 27.8991 29.2827Z" fill="white" fill-opacity="0.97"/>
                    </svg>
                    <a>Войти</a>
                </button>
                </div>
            }
            { (createPortal(isModalRegistOpen && <RegistrationModal onChange={handleClickRegistration} />,  modalList))}
            { (createPortal(isModalAuthorizOpen && <AuthorizationModal onChange={handleClickAuthoriz} />,  modalList))}
    
        </div>
    )
}

export default Profile;
