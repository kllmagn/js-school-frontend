import { Task } from "hooks/useTask";
import styles from "./TaskView.module.less";
import { SolutionStatus, TaskViewProps } from "./types";

const getStatus = (
	is_solved: boolean,
	status: SolutionStatus | null,
): [string, string | undefined] => {
	if (is_solved) {
		return ["Решено", "green"];
	}
	switch (status) {
		case "error":
			return ["Ошибка :(", "red"];
		case "accepted":
			return ["Решено", "green"];
		case "rejected":
			return ["Отклонено", "red"];
		case "timeout":
			return ["Таймаут", "blue"];
	}
	return ["Не решено", undefined];
};

const TaskView = ({
	id,
	description,
	is_solved = false,
	group_id,
	group,
	template,
	onStepClick,
	status,
}: TaskViewProps) => {
	const [statusText, statusColor] = getStatus(is_solved, status);
	return (
		<span className={styles.taskView} onClick={onStepClick}>
			<span className={styles.taskViewDescription}>{description}</span>
			<span
				className={styles.taskViewStatus}
				style={{
					backgroundColor: statusColor,
				}}
			>
				{statusText}
			</span>
		</span>
	);
};

export default TaskView;
