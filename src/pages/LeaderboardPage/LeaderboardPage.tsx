import ViewBox from "components/containers/ViewBox/ViewBox";
import styles from "./leaderboard.module.css";
import { LeaderboardElement } from "./LeaderboardElement/LeaderboardElement";
import trophy from "icons/trophy.png";
import { useLeaderboardData } from "hooks/useLeaderboardData";
import { AnimationPage } from "components/AnimationPage/AnimationPage";


export const Leaderboard = () => {
    const [data, loading] = useLeaderboardData();
	return (
        <div className={styles.list}>
            {loading ? <AnimationPage/> : (data.map((category, index) => (
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
			)))}
        </div>
	);
};
