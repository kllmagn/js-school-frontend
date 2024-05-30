
import styles from "./leaderboard.module.css";
import { LeaderboardElement } from "./LeaderboardElement/LeaderboardElement";
import trophy from "./trophy.png";


export function Leaderboard() {
	return (

		<div className={styles.container}>
             <div className={styles.list}>
              
                  <a className={styles.mainTopic}>Топ 10 пользователей <img className={styles.trophy} src={trophy}></img></a>
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
		</div>
       
	);
}
