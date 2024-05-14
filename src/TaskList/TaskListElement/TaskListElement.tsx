import React from "react";
import styles from "./tasklistelement.module.css";
import { useLinkClickHandler } from "react-router-dom";
import { TaskGroup } from "../../hooks/useTaskgroups";

export type TaskListElementProps = {
	taskGroup: TaskGroup;
	idx: number;
};

export function TaskListElement({ taskGroup, idx }: TaskListElementProps) {
	const { id, title, description, weight, is_solved = false } = taskGroup;
	return (
		<div
			className={styles.container}
			onClick={useLinkClickHandler(`group/${id}`, {
				state: {
					taskGroup,
				},
			})}
		>
			<a className={`${styles.title} ${is_solved ? styles.solved : ""}`}>
				<a>Задание {idx}</a>
				<a>{title} </a>
				<a>очки - {weight} </a>
				<a>{is_solved ? "Решено" : ""}</a>
			</a>
		</div>
	);
}
