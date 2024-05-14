import { Task } from "../../../../hooks/useTask";
import styles from "./stepelement.module.css";

type StepElementProps = {
	onStepClick: () => void;
} & Task;

export function StepElement({
	id,
	description,
	is_solved = false,
	group_id,
	group,
	template,
	onStepClick,
}: StepElementProps) {
	return (
		<a className={styles.step} onClick={onStepClick}>
			- {description}
		</a>
	);
}
