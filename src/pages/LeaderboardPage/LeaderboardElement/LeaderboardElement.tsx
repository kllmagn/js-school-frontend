import styles from "./leaderboardelement.module.css";
import avatarDefault from "./dickinglass.png";
import { Leaderboard } from "hooks/useLeaderboardData";






export function LeaderboardElement({id, username, solutions, solutions_total, avatar=avatarDefault, rank, rank_position}: Leaderboard) {
    console.log(avatar);
	return (
		<div className={styles.layout}>
			<div className={styles.container}>
				<img alt="avatar" className={styles.avatar} src={avatar}></img>
				<span>{username}</span>
				<span>место в рейтинге - {rank_position}</span>
				<span>очки - {rank}</span>
			</div>
		</div>
	);
}
