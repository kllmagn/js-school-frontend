import ViewBox from "components/containers/ViewBox/ViewBox";
import styles from "./leaderboard.module.css";
import { LeaderboardElement } from "./LeaderboardElement/LeaderboardElement";
import trophy from "icons/trophy.png";

export const Leaderboard = () => {
	return (
        <div className={styles.list}>
            <LeaderboardElement></LeaderboardElement>
            <LeaderboardElement></LeaderboardElement>
            <LeaderboardElement></LeaderboardElement>
            <LeaderboardElement></LeaderboardElement>
            <LeaderboardElement></LeaderboardElement>
            <LeaderboardElement></LeaderboardElement>
            <LeaderboardElement></LeaderboardElement>
            <LeaderboardElement></LeaderboardElement>
            <LeaderboardElement></LeaderboardElement>
            <LeaderboardElement></LeaderboardElement>
        </div>
	);
};
