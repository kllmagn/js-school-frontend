import React from "react";
import styles from "./CardList.module.css";
import { CategoryCard } from "components/containers/Card/Card";
import { useCategoriesData } from "hooks/useCategoryData";
import { AnimationPage } from "components/AnimationPage/AnimationPage";

type CardListProps = {
	levelId: number;
};

export function CardList({ levelId }: CardListProps) {
	const [data, loading] = useCategoriesData(levelId);
	return (
		<div className={styles.container}>
			{loading ? (
				<AnimationPage />
			) : (
				data.map((category, index) => (
					<CategoryCard
						key={category.id}
						id={category.id}
						title={category.title}
						description={category.description}
						number={index}
					/>
				))
			)}
		</div>
	);
}
