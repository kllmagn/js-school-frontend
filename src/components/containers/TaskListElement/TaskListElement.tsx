import React from "react";
import styles from "./TaskListElement.module.css";
import { useLinkClickHandler } from "react-router-dom";
import { TaskGroup } from "hooks/useTaskgroups";

export type TaskListElementProps = {
	taskGroup: TaskGroup;
	idx: number;
};

export function TaskListElement({ taskGroup, idx }: TaskListElementProps) {
	const { id, title, weight, is_solved = false } = taskGroup;
	return (
		<div className={`${styles.layout} ${is_solved ? styles.solved : ""}`}>
			<div
				className={styles.container}
				onClick={useLinkClickHandler(`group/${id}`, {
					state: {
						taskGroup,
					},
				})}
			>
				<span>Задание {idx}</span>
				<span>{title} </span>
				<span>очки - {weight} </span>
				<span>{is_solved ? "Решено" : ""}</span>
			</div>
		</div>
	);
}
