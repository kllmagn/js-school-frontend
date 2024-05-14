import React from "react";
import styles from "./header.module.css";
import logo from "../logo.png";
import Profile from "./Profile/Profile";
import { Link, useLinkClickHandler } from "react-router-dom";
export function Header() {
	return (
		<div>
			<div className={styles.header}>
				<div className={styles.logo} onClick={useLinkClickHandler("/")}>
					<img src={logo} alt="logo" />
					<div className={styles.container}>
						<a>JavaScript School</a>
					</div>
				</div>
				<div className={styles.menu}>
					<ul>
						<li>
							<a onClick={useLinkClickHandler("/")}>Моё обучение</a>
						</li>
						<li>
							<a onClick={useLinkClickHandler("/aboutUs")}>О нас</a>
						</li>
					</ul>
				</div>
				<Profile />
			</div>
		</div>
	);
}
