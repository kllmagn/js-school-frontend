import Avatar from "components/base/Avatar";
import styles from "./SearchElement.module.css";
import avatar from "pages/LeaderboardPage/LeaderboardElement/dickinglass.png";

export function SearchElement() {
	return (
		<div className={styles.layout}>
			<div className={styles.container}>
				<Avatar src={avatar} />
				<span>ХуйВОчках2020</span>
				<span>место в рейтинге - 1</span>
				<span>очки - 2302</span>
			</div>
		</div>
	);
}
