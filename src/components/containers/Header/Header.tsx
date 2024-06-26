import React from "react";
import styles from "./header.module.css";
import Profile from "./Profile/Profile";
import { useLinkClickHandler } from "react-router-dom";
import { ReactComponent as IconLogo } from "icons/logo.svg";
import { ReactComponent as IconSearch } from "icons/search.svg";
import { useRefreshWrapper } from "hooks/useRefreshWrapper";

export function Header() {
    const [token] = useRefreshWrapper();
    const searchClickHandler = useLinkClickHandler<HTMLDivElement>("/search");
    const leaderboardClickHandler = useLinkClickHandler<HTMLDivElement>("/leaderboard");
    const homeClickHandler = useLinkClickHandler<HTMLDivElement>("/home");
    const deafultClickHandler = useLinkClickHandler<HTMLDivElement>("/");
	return (
		<div className={styles.header}>
			<div className={styles.logoContainer} onClick={useLinkClickHandler("/")}>
				<IconLogo className={styles.logo} />
				<span className={styles.logoTitle}>JavaScript School</span>
			</div>
            {token && <div className={styles.menuContainer}>
				<div className={styles.searchContainer}>
					<IconSearch className={styles.icon} />
					<span onClick={searchClickHandler}>Поиск</span>
				</div>
				<span onClick={leaderboardClickHandler}>
					Список лидеров
				</span>
				<span onClick={homeClickHandler}>Моё обучение</span>
				<span onClick={deafultClickHandler}>О сайте</span>
			</div>}
			
			<Profile />
		</div>
	);
}
