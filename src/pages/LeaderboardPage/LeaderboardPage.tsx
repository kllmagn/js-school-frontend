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
				data.map((category, index) => (
					<LeaderboardElement
						key={category.id}
						id={category.id}
						username={category.username}
						solutions={category.solutions}
						solutions_total={category.solutions_total}
						avatar={category.avatar}
						rank={category.rank}
						rank_position={category.rank_position}
					/>
				))
			)}
		</div>
	);
};
