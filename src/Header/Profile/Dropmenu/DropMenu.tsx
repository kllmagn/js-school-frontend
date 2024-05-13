import React from 'react';
import styles from './dropmenu.module.css';

import {ReactComponent as IcoProfile} from './profile.svg';
import {ReactComponent as IcoSettings} from './settings.svg';
import {ReactComponent as IcoExit} from './exit.svg';
import { useLinkClickHandler, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setTokenAccess, setTokenRefresh } from '../../../redux/token/token.slice';

interface props {
  handleMouseEnter: () => void;
}

export function DropMenu({handleMouseEnter}:props) {

  const navigate = useNavigate();

  const handleExitButton = () => {
    dispatch(setTokenAccess(null));
    dispatch(setTokenRefresh(null));
    navigate("/");
    //window.location.reload();
  }

  const dispatch = useDispatch();
  return (
    <div className={styles.dropdown}  onMouseLeave={handleMouseEnter}>
      <div className={styles.dropdownContent} onClick={useLinkClickHandler("/profile")}>
        <IcoProfile/>
        <a>Профиль</a>
      </div>
      <div className={styles.dropdownContent} onClick={useLinkClickHandler("/settings")}>
        <IcoSettings/>
        <a>Настройки</a>
      </div>
      <div className={styles.dropdownContent} onClick={handleExitButton} >
        <IcoExit/>
        <a>Выйти</a>
      </div>
    </div>
  );
}
