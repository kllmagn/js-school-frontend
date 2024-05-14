import { Task } from "../../../../hooks/useTask";
import styles from "./stepelement.module.css";

type SubTaskProps = {
	onStepClick: () => void;
} & Task;

const SubTask = ({
	id,
	description,
	is_solved = false,
	group_id,
	group,
	template,
	onStepClick,
}: SubTaskProps) => {
	return (
		<a className={styles.step} onClick={onStepClick}>
			- {description}
		</a>
	);
}

export default SubTask;
