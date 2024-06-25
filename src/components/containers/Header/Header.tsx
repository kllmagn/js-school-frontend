import React from "react";
import styles from "./header.module.css";
import Profile from "./Profile/Profile";
import { useLinkClickHandler } from "react-router-dom";
import { ReactComponent as IconLogo } from "icons/logo.svg";
import { ReactComponent as IconSearch } from "icons/search.svg";

export function Header() {
	return (
		<div className={styles.header}>
			<div className={styles.logoContainer} onClick={useLinkClickHandler("/")}>
				<IconLogo className={styles.logo} />
				<span className={styles.logoTitle}>JavaScript School</span>
			</div>
			<div className={styles.menuContainer}>
				<div className={styles.searchContainer}>
					<IconSearch className={styles.icon} />
					<span onClick={useLinkClickHandler("/search")}>Поиск</span>
				</div>
				<span onClick={useLinkClickHandler("/leaderboard")}>
					Список лидеров
				</span>
				<span onClick={useLinkClickHandler("/")}>Моё обучение</span>
				<span onClick={useLinkClickHandler("/aboutUs")}>О сайте</span>
			</div>
			<Profile />
		</div>
	);
}
