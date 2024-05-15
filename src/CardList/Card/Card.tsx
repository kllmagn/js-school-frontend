import React from "react";
import styles from "./card.module.css";
import { useLinkClickHandler } from "react-router-dom";
import icon1 from "./iconCard1.png";
import icon2 from "./iconCard2.png";
import icon3 from "./iconCard3.png";
import icon4 from "./iconCard4.png";

type CardProps = {
	id: number;
	title: string;
	description: string;
	number: number;
};

const icons = [icon1, icon2, icon3, icon4];

export function Card({ id, title, description, number }: CardProps) {
	return (
		<div className={styles.card}>
			<div className={styles.cardContent}>
				<img src={icons[number]}></img>
				<a className={styles.title}>{title}</a>
				<a className={styles.description}>{description}</a>
				<a className={styles.tasks}>10 заданий</a>
				<button
					className={styles.button_}
					onClick={useLinkClickHandler(`/category/${id}`)}
				>
					Продолжить обучение
				</button>
			</div>
		</div>
	);
}
