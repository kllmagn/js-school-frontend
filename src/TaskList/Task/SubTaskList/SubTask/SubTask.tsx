import { Task } from "../../../../hooks/useTask";
import { SolutionStatus } from "../../Task";
import styles from "./stepelement.module.css";

type SubTaskProps = {
	onStepClick: () => void;
	status: SolutionStatus | null;
} & Task;

const SubTask = ({
	id,
	description,
	is_solved = false,
	group_id,
	group,
	template,
	onStepClick,
	status,
}: SubTaskProps) => {
	return (
		<a className={styles.step} onClick={onStepClick}>
			- {description} {status ? `(${status})` : ""}
		</a>
	);
};

export default SubTask;