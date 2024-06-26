import { Task } from "hooks/useTask";

export type TaskViewProps = {
	onStepClick: () => void;
	status: SolutionStatus | null;
} & Task;

export enum SolutionStatus {
	CREATED = "created",
	IN_PROGRESS = "in_progress",
	ERROR = "error",
	ACCEPTED = "accepted",
	REJECTED = "rejected",
	TIMEOUT = "timeout",
}
