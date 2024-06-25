import Avatar from "components/base/Avatar";
import styles from "./SearchElement.module.css";
import avatar from "pages/LeaderboardPage/LeaderboardElement/dickinglass.png";
import { User } from "hooks/useMeData";

export function SearchElement({
	id,
	username,
	solutions,
	solutions_total,
	avatar,
	rank,
	rank_position,
}: User) {
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
