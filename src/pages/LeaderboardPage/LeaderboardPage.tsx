import ViewBox from "components/containers/ViewBox/ViewBox";
import styles from "./leaderboard.module.css";
import { LeaderboardElement } from "./LeaderboardElement/LeaderboardElement";
import trophy from "icons/trophy.png";
import { useLeaderboardData } from "hooks/useLeaderboardData";
import { AnimationSkeleton } from "components/skeletons/AnimationSkeleton/AnimationSkeleton";

export const Leaderboard = () => {
	const [data, loading] = useLeaderboardData();
	return (
		<div className={styles.list}>
			<span className={styles.mainTopic}>
				Топ 10 пользователей <img className={styles.trophy} src={trophy} />
			</span>
			{loading ? (
				<AnimationSkeleton />
			) : (
				data.map((users, index) => (
					<LeaderboardElement
						key={users.id}
						id={users.id}
						username={users.username}
						solutions={users.solutions}
						solutions_total={users.solutions_total}
						avatar={users.avatar}
						rank={users.rank}
						rank_position={users.rank_position}
					/>
				))
			)}
		</div>
	);
};
