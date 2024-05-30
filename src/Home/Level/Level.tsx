import { CardList } from "../../CardList/CardList";
import styles from "./level.module.css";

type Level = {
	id: number;
	title: string;
	description: string;
	order: number;
};

export const Level = ({ id, title, description, order }: Level) => {
	return (
		<div className={styles.container}>
            <div className={styles.background}>
			<div className={styles.text}>
				<div className={styles.levelText}>
					<a className={styles.levelOrder}>Уровень {order}: </a>
                    <a className={styles.levelTitle}> {title}</a>
				</div>
				<a>{description}</a>
				<CardList levelId={id} />
			</div>
            </div>
		</div>
	);
};
