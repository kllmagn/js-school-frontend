import styles from "./leaderboardelement.module.css";
import avatar from "./dickinglass.png";
export function LeaderboardElement() {
	return (
		<div className={styles.layout}>
			<div className={styles.container}>
				<img alt="avatar" className={styles.avatar} src={avatar}></img>
				<span>ХуйВОчках2020</span>
				<span>место в рейтинге - 1</span>
				<span>очки - 2302</span>
			</div>
		</div>
	);
}
