import React, { useCallback, useEffect, useState } from "react";
import styles from "./task.module.css";
import { Sidebar } from "./sidebar/Sidebar";
import { TheorySidebar } from "../../modals/TheorySidebar/TheorySidebar";
import { StepsTask } from "./StepsTask/StepsTask";
import { NextTaskButton } from "./NextTaskButton/NextTaskButton";
import { useLocation, useParams } from "react-router-dom";
import { useTask } from "../../hooks/useTask";
import { TaskGroup } from "../../hooks/useTaskgroups";
import TaskEditor from "./TaskEditor/TaskEditor";
import SolutionCheckContainer from "./SolutionCheckContainer/SolutionCheckContainer";

export function Task() {
	const { state } = useLocation();
	const { taskGroup } = state;
	const { id, title, description } = taskGroup as TaskGroup;
	const taskGroupId = String(id);
	const [stepsList] = useTask(taskGroupId); //повторяется в steps вызов
	const [activeStepIdx, setActiveStepIdx] = useState(0);
	const activeStep = stepsList[activeStepIdx] || null;
	const [activeStepStatus, setActiveStepStatus] = useState<string | null>(null);
	const [isTheoryOpen, setTheoryOpen] = useState(false);
	const content = stepsList[activeStepIdx]?.template?.content;
	const code = content ? content.join("") : content;
	const [codeValue, setCodeValue] = useState(code || "");
	const showEditor = stepsList.length > 0;
	let handleClickTheory = () => {
		setTheoryOpen(!isTheoryOpen);
	};
	useEffect(() => {
		setCodeValue(code);
	}, [code]);
	const handleShowAnswer = useCallback(() => {}, []);
	const handleSubmitSolution = useCallback(() => {
		fetch(``);
	}, [activeStep]);
	return (
		<div className={styles.taskContainer}>
			{isTheoryOpen && (
				<TheorySidebar
					handleClickTheory={handleClickTheory}
					description={description}
					title={title}
				/>
			)}
			<div className={styles.taskContainerInner}>
				<div className={styles.taskLayout}>
					<Sidebar handleClickTheory={handleClickTheory} />
					<div className={styles.leftPart}>
						{showEditor && (
							<TaskEditor codeValue={codeValue} setCodeValue={setCodeValue} />
						)}
						<SolutionCheckContainer
							onShowAnswer={handleShowAnswer}
							onSubmitSolution={handleSubmitSolution}
						/>
					</div>
					<div className={styles.rightPart}>
						<div style={{ width: "100%", height: "70%", zIndex: "1" }} />
						<StepsTask
							taskGroupId={taskGroupId}
							setActiveStepIdx={setActiveStepIdx}
						/>
						<NextTaskButton />
					</div>
				</div>
			</div>
		</div>
	);
}
