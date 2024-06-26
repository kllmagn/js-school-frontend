import { useLinkClickHandler } from "react-router-dom";
import styles from "./DescriptionPage.module.css";
import png2Description from "./laptop_typing.png";
import { useRefreshWrapper } from "hooks/useRefreshWrapper";

export function DescriptionPage() {
    const [token] = useRefreshWrapper();
    const homeClickHandler = useLinkClickHandler<HTMLDivElement>("/home");
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
								Игры пользуются широкой популярностью не только у детей, но и у
								взрослых.
								<p>
									Каждый может получать удовольствие от игр, если они хорошо
									разработаны и увлекательны. То же самое относится и к
									обучению.
								</p>{" "}
								<br />
								– уроки с элементами геймификации в обучении мотивируют сильнее,
								чем традиционные занятия
								<br />
								<br />– Благодаря игровым механикам успеваемость может
								повыситься на 89%
								<br />
								<br /> – С помощью игровых механик можно запоминать в три раза
								больше информации
								<br />
							</span>
						</div>
					</div>
                    {token && <div className={styles.button} onClick={homeClickHandler}>
						Перейти к обучению
					</div>}
					
				</div>
			</div>
		</div>
	);
}
