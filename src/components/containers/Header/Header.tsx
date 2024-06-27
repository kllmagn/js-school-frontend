import React from "react";
import styles from "./header.module.css";
import Profile from "./Profile/Profile";
import { useLinkClickHandler } from "react-router-dom";
import { ReactComponent as IconLogo } from "icons/logo.svg";
import { ReactComponent as IconSearch } from "icons/search.svg";
import { useSelector } from "react-redux";
import { accessTokenSelector } from "store/token/token.selector";

export function Header() {
    const tokenAccess = useSelector(accessTokenSelector);
    const searchHandler = useLinkClickHandler("/search");
    const leaderboardHandler = useLinkClickHandler("/leaderboard");
    const learningHandler = useLinkClickHandler("/learning");
	return (
		<div className={styles.header}>
			<div className={styles.logoContainer} onClick={useLinkClickHandler("/")}>
				<IconLogo className={styles.logo} />
				<span className={styles.logoTitle}>JavaScript School</span>
			</div>
			<div className={styles.menuContainer}>
                {
                    tokenAccess && (
                        <>
                            <div className={styles.searchContainer}>
                                <IconSearch className={styles.icon} />
                                <span onClick={searchHandler}>Поиск</span>
                            </div>
                            <span onClick={leaderboardHandler}>
                                Список лидеров
                            </span>
                            <span onClick={learningHandler}>Моё обучение</span>
                        </>
                    )
                }
				<span onClick={useLinkClickHandler("/")}>О сайте</span>
			</div>
			<Profile />
		</div>
	);
}
