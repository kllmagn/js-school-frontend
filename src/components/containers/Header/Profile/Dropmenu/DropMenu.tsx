import React from "react";
import styles from "./DropMenu.module.css";

import { ReactComponent as IcoProfile } from "icons/profile.svg";
import { ReactComponent as IcoSettings } from "icons/settings.svg";
import { ReactComponent as IcoExit } from "icons/exit.svg";
import { useLinkClickHandler, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setTokenAccess, setTokenRefresh } from "store/token/token.slice";

interface props {
	handleMouseEnter: () => void;
}

export function DropMenu({ handleMouseEnter }: props) {
	const navigate = useNavigate();

	const handleExitButton = () => {
		dispatch(setTokenAccess(null));
		dispatch(setTokenRefresh(null));
		navigate("/");
		//window.location.reload();
	};

	const dispatch = useDispatch();
	return (
		<div className={styles.dropdown} onMouseLeave={handleMouseEnter}>
			<div
				className={styles.dropdownContent}
				onClick={useLinkClickHandler("/profile")}
			>
				<IcoProfile />
				<span>Профиль</span>
			</div>
			<div
				className={styles.dropdownContent}
				onClick={useLinkClickHandler("/settings")}
			>
				<IcoSettings />
				<span>Настройки</span>
			</div>
			<div className={styles.dropdownContent} onClick={handleExitButton}>
				<IcoExit />
				<span>Выйти</span>
			</div>
		</div>
	);
}
