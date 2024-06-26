import React, { useState } from "react";
import styles from "./DropMenu.module.css";

import { ReactComponent as IcoProfile } from "icons/profile.svg";
import { ReactComponent as IcoSettings } from "icons/settings.svg";
import { ReactComponent as IcoExit } from "icons/exit.svg";
import { useLinkClickHandler, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setTokenAccess, setTokenRefresh } from "store/token/token.slice";

import avatarDefault from "icons/placeholder.png";
import icoArrow from "icons/arrow.svg";
import { useMeData } from "hooks/useMeData";
import { AnimationSkeleton } from "components/skeletons/AnimationSkeleton/AnimationSkeleton";
import { createPortal } from "react-dom";

type DropMenu = {
	avatar: string | undefined;
};

export function DropMenu({ avatar }: DropMenu) {
	const container = document.getElementById("root");
	const navigate = useNavigate();

	const handleExitButton = () => {
		dispatch(setTokenAccess(null));
		dispatch(setTokenRefresh(null));
		navigate("/");
	};

	const dispatch = useDispatch();
	const [userData, loading] = useMeData();
	const [show, setShow] = useState<Boolean>(false);
	const handleMouseOver = () => {
		setShow(true);
	};
	const handleMouseOut = () => {
		setShow(false);
	};
	const profileClickHandler = useLinkClickHandler<HTMLDivElement>("/profile");
	const settingsClickHandler = useLinkClickHandler<HTMLDivElement>(
		`/settings/${userData?.username}`,
	);
	console.log("showDebug", show);
	return (
		<>
			{container &&
				(loading ? (
					createPortal(<AnimationSkeleton></AnimationSkeleton>, container)
				) : (
					<div
						className={styles.dropdown}
						onMouseOver={handleMouseOver}
						onMouseOut={handleMouseOut}
					>
						<button className={styles.dropbtn}>
							<div
								className={styles.avatar}
								style={{ backgroundImage: `url(${avatar})` }}
							></div>
							<span> {userData ? userData.username : "Лунтик"} </span>
							<img alt="arrow" className={styles.arrowClicked} src={icoArrow} />
						</button>
						{show && (
							<div className={styles.dropdownContentWrapper}>
								<div className={styles.dropdownContent}>
									<div
										className={styles.dropdownContentElement}
										onClick={profileClickHandler}
									>
										<IcoProfile />
										<span>Профиль</span>
									</div>
									<div
										className={styles.dropdownContentElement}
										onClick={settingsClickHandler}
									>
										<IcoSettings />
										<span>Настройки</span>
									</div>
									<div
										className={styles.dropdownContentElement}
										onClick={handleExitButton}
									>
										<IcoExit />
										<span>Выйти</span>
									</div>
								</div>
							</div>
						)}
					</div>
				))}
		</>
	);
}
