import React from "react";
import styles from "./SolutionCheckContainer.module.css";

export type SolutionCheckContainerProps = {
	onShowAnswer: () => void;
	onSubmitSolution: () => void;
	canSubmitSolution: boolean;
};

const SolutionCheckContainer = ({
	onShowAnswer,
	onSubmitSolution,
	canSubmitSolution,
}: SolutionCheckContainerProps) => {
	return (
		<div className={styles.container}>
			<div className={styles.listButtons}>
				<button className={styles.showAnswer} onClick={onShowAnswer}>
					Показать ответ
				</button>
				<button
					className={styles.checkDecision}
					disabled={!canSubmitSolution}
					onClick={onSubmitSolution}
				>
					Проверить решение
				</button>
			</div>
		</div>
	);
};

export default SolutionCheckContainer;
