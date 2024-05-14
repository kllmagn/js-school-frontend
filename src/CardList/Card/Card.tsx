import React from "react";
import styles from "./card.module.css";
import icon from "./iconCard.png";
import { useLinkClickHandler } from "react-router-dom";

type CardProps = {
	id: number;
	title: string;
	description: string;
};

export function Card({ id, title, description }: CardProps) {
	return (
		<div className={styles.card}>
			<div className={styles.cardContent}>
				<img src={icon}></img>
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
