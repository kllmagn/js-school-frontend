import styles from "./leaderboardelement.module.css";
import { Leaderboard } from "hooks/useLeaderboardData";
import avatarDefault from "icons/placeholder.png";

export function LeaderboardElement({
	id,
	username,
	solutions,
	solutions_total,
	avatar = avatarDefault,
	rank,
	rank_position,
}: Leaderboard) {
	console.log(avatar);
	return (
		<div className={styles.layout}>
			<div className={styles.container}>
				<div
					className={styles.avatar}
					style={{ backgroundImage: `url(${avatar})` }}
				></div>
				<span>{username}</span>
				<span>место в рейтинге - {rank_position}</span>
				<span>очки - {rank}</span>
			</div>
		</div>
	);
}
