import { CardList } from "components/lists/CardList/CardList";
import styles from "./Level.module.css";

type LevelProps = {
	id: number;
	title: string;
	description: string;
	order: number;
};

export const Level = ({ id, title, description, order }: LevelProps) => {
	return (
		<div className={styles.container}>
			<div className={styles.background}>
				<div className={styles.text}>
					<div className={styles.levelText}>
						<span className={styles.levelOrder}>Уровень {order}: </span>
						<span className={styles.levelTitle}> {title}</span>
					</div>
					<span>{description}</span>
					<CardList levelId={id} />
				</div>
			</div>
		</div>
	);
};
