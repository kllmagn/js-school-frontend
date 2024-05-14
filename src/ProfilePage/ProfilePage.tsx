import styles from "./profilepage.module.css";
import avatar from "../Header/Profile/placeholder.png";
import { useLinkClickHandler } from "react-router-dom";
import { useMeData } from "../hooks/useMeData";

export function ProfilePage() {
	const [userData] = useMeData();
	return (
		<div className={styles.page}>
			<div className={styles.container}>
				<div className={styles.layoutLeft}>
					<img className={styles.avatarImg} src={avatar}></img>
					<a
						className={styles.settings}
						onClick={useLinkClickHandler("/settings")}
					>
						Настройки
					</a>
				</div>
				<div className={styles.layoutRight}>
					<a className={styles.username}>
						{userData ? userData.username : "Лунтик"}
					</a>
					<a className={styles.ratingHeader}>Рейтинг: #123234</a>
					<a className={styles.readyTasksHeader}> Решенные задачи </a>

					<svg
						className={styles.lineSvg}
						width=""
						height="2"
						viewBox="0 0 879 2"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<line x1="-0.00732422" y1="1" x2="879.007" y2="1" stroke="black" />
					</svg>
					<div className={styles.readyTasks}>
						<a>Задание 1 - делаем игру 2024</a>
						<a>Задание 2 - делаем игру 2024</a>
					</div>
				</div>
			</div>
		</div>
	);
}
