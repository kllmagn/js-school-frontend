import React from "react";
import styles from "./Card.module.css";
import { useLinkClickHandler } from "react-router-dom";
import icon1 from "icons/card/iconCard1.png";
import icon2 from "icons/card/iconCard2.png";
import icon3 from "icons/card/iconCard3.png";
import icon4 from "icons/card/iconCard4.png";

type CategoryCardProps = {
	id: number;
	title: string;
	description: string;
	number: number;
};

type CardProps = {
	children: React.ReactNode;
};

const icons = [icon1, icon2, icon3, icon4];

const Card = ({ children }: CardProps) => {
	return <div className={styles.card}>{children}</div>;
};

export function CategoryCard({
	id,
	title,
	description,
	number,
}: CategoryCardProps) {
	return (
		<div className={styles.card}>
			<div className={styles.cardContent}>
				<img alt="card-icon" src={icons[number]}></img>
				<span className={styles.title}>{title}</span>
				<span className={styles.description}>{description}</span>
				<span className={styles.tasks}>10 заданий</span>
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
