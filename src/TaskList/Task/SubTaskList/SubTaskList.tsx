import styles from "./stepstask.module.css";
import { useTask } from "../../../hooks/useTask";
import SubTask from "./SubTask/SubTask";

type SubTaskListProps = {
	taskGroupId: string | undefined;
	setActiveStepIdx: (idx: number) => void;
};

function SubTaskList({
	taskGroupId: taskgroupId,
	setActiveStepIdx,
}: SubTaskListProps) {
	const [stepsList] = useTask(taskgroupId);
	return (
		<div className={styles.container}>
			<div className={styles.description}>
				<a>Задания:</a>
				{stepsList.map((step, index) => (
					<SubTask
						id={step.id}
						description={step.description}
						is_solved={step.is_solved}
						group_id={step.group_id}
						group={step.group}
						template={step.template}
						onStepClick={() => setActiveStepIdx(index)}
					/>
				))}
			</div>
		</div>
	);
}

export default SubTaskList;
