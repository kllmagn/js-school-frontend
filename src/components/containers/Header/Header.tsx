import React from "react";
import styles from "./header.module.css";
import Profile from "./Profile/Profile";
import { useLinkClickHandler } from "react-router-dom";

export function Header() {
	return (
		<div className={styles.header}>
			<div className={styles.logoContainer} onClick={useLinkClickHandler("/")}>
				<svg
					className={styles.logo}
					width="126"
					height="126"
					viewBox="0 0 172 126"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M81.5 10.5V123.5C47 125.833 -16.1 124.3 7.50003 99.5C31.1 74.7 113.333 23.8333 151.5 1.5C122.833 7.83333 72.6 25.6 101 46C136.5 71.5 202 123.5 151.5 123.5H101"
						stroke="black"
						stroke-width="3"
					/>
				</svg>
				<span className={styles.logoTitle}>JavaScript School</span>
			</div>

			<div className={styles.menuContainer}>
				<div className={styles.searchContainer}>
					<svg
						className={styles.icon}
						width="45"
						height="41"
						viewBox="0 0 45 41"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M0.5 15C0.5 23.0081 6.99187 29.5 15 29.5C23.0081 29.5 29.5 23.0081 29.5 15C29.5 6.99187 23.0081 0.5 15 0.5C6.99187 0.5 0.5 6.99187 0.5 15Z"
							stroke="black"
						/>
						<line
							y1="-0.5"
							x2="24.0832"
							y2="-0.5"
							transform="matrix(0.747409 0.664364 0.623638 -0.781713 27 24)"
							stroke="black"
						/>
					</svg>

					<span onClick={useLinkClickHandler("/search")}>Поиск</span>
				</div>
				<span onClick={useLinkClickHandler("/leaderboard")}>
					Список лидеров
				</span>
				<span onClick={useLinkClickHandler("/")}>Моё обучение</span>
				<span onClick={useLinkClickHandler("/aboutUs")}>О нас</span>
			</div>
			<Profile />
		</div>
	);
}
