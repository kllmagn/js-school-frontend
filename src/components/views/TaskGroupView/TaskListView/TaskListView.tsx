import styles from "./TaskListView.module.css";
import { useTask } from "hooks/useTask";
import TaskView from "./TaskView/TaskView";
import { SolutionStatus } from "./TaskView/types";

type SubTaskListProps = {
	activeSubTaskStatus: SolutionStatus | null;
	taskGroupId: string | undefined;
	activeSubTaskIdx: number;
	setActiveSubTaskIdx: (idx: number) => void;
};

function SubTaskList({
	activeSubTaskStatus,
	taskGroupId,
	activeSubTaskIdx,
	setActiveSubTaskIdx,
}: SubTaskListProps) {
	const [stepsList] = useTask(taskGroupId);
	return (
		<div className={styles.container}>
			<div className={styles.description}>
				<span>Задания:</span>
			</div>
			<div className={styles.taskList}>
				{stepsList.map((step, index) => {
					let subTaskStatus: SolutionStatus | null = null;
					if (index === activeSubTaskIdx) {
						subTaskStatus = activeSubTaskStatus;
					}
					return (
						<TaskView
							id={step.id}
							description={step.description}
							is_solved={step.is_solved}
							group_id={step.group_id}
							group={step.group}
							template={step.template}
							onStepClick={() => setActiveSubTaskIdx(index)}
							status={subTaskStatus}
						/>
					);
				})}
			</div>
		</div>
	);
}

export default SubTaskList;
