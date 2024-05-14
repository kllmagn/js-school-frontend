import { useLinkClickHandler } from "react-router-dom";
import styles from "./descriptionpage.module.css";
import png1Description from "./firstdescriptionimg.png";
import png2Description from "./huita.png";

export function DescriptionPage() {
	return (
		<div className={styles.container}>
			<div className={styles.layout}>
				<div className={styles.containerContent}>
					<div className={styles.template}>
						<div className={styles.firstDescription}>
							<a className={styles.header}>
								Начинайте учить JavaScript <br />с помощью игр!
							</a>
							<a className={styles.description}>
								<br />
								Игровой подход делает процесс обучения более интересным и
								увлекательным. Взаимодействие с игровыми элементами помогает
								запомнить материал лучше и дольше.
							</a>
							<a className={styles.description}>
								Получайте очки за задачи и стремитесь к наивысшему рейтингу
								среди пользователей!
							</a>
						</div>
						<div className={styles.imgFirst}></div>
					</div>
					<div className={styles.template}>
						<img className={styles.imgSecond} src={png2Description}></img>
						<div className={styles.firstDescription}>
							<a className={styles.description}>
								<br />
								Игровой подход делает процесс обучения более интересным и
								увлекательным. Взаимодействие с игровыми элемеffffffнтами
								помогает запомнить материал лучше и дольше. Получайте очки за
								задачи и стремитесь к наивысшему рейтингу среди пользователей!
							</a>
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
