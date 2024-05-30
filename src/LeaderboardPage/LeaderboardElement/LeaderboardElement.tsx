
import styles from "./leaderboardelement.module.css";
import avatar from "./dickinglass.png";
export function LeaderboardElement() {
	return (
        <div className={styles.layout}>
            <div className={styles.container}>
                <img className={styles.avatar} src={avatar}></img>
                <a>ХуйВОчках2020</a>
                <a>место в рейтинге - 1</a>
                <a>очки - 2302</a>
            </div>
        </div>
	);
}