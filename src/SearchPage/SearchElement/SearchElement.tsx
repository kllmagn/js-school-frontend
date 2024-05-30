import styles from "./SearchElement.module.css";
import avatar from "../../LeaderboardPage/LeaderboardElement/dickinglass.png";
export function SearchElement() {
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