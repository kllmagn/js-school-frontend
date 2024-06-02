import { useLinkClickHandler } from "react-router-dom";
import styles from "./DescriptionPage.module.css";
import png2Description from "./laptop_typing.png";

export function DescriptionPage() {
	return (
		<div className={styles.container}>
			<div className={styles.layout}>
				<div className={styles.containerContent}>
					<div className={styles.template}>
						<div className={styles.firstDescription}>
							<span className={styles.header}>
								Начинайте учить JavaScript <br />с помощью игр!
							</span>
							<span className={styles.description}>
								<br />
								Игровой подход делает процесс обучения более интересным и
								увлекательным. Взаимодействие с игровыми элементами помогает
								запомнить материал лучше и дольше.
							</span>
							<span className={styles.description}>
								Получайте очки за задачи и стремитесь к наивысшему рейтингу
								среди пользователей!
							</span>
						</div>
						<div className={styles.imgFirst}></div>
					</div>
					<div className={styles.template}>
						<img
							alt="description"
							className={styles.imgSecond}
							src={png2Description}
						></img>
						<div className={styles.firstDescription}>
							<span className={styles.description}>
								<br />
								Игровой подход делает процесс обучения более интересным и
								увлекательным. Взаимодействие с игровыми элемеffffffнтами
								помогает запомнить материал лучше и дольше. Получайте очки за
								задачи и стремитесь к наивысшему рейтингу среди пользователей!
							</span>
						</div>
					</div>

					<div className={styles.button} onClick={useLinkClickHandler("/")}>
						Перейти к обучению
					</div>
				</div>
			</div>
		</div>
	);
}
