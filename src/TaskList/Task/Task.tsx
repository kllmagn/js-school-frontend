import React, { useCallback, useEffect, useState } from "react";
import styles from "./task.module.css";
import { TheorySidebar } from "../../modals/TheorySidebar/TheorySidebar";
import { NextTaskButton } from "./NextTaskButton/NextTaskButton";
import { useLocation, useParams } from "react-router-dom";
import { useTask } from "../../hooks/useTask";
import { TaskGroup } from "../../hooks/useTaskgroups";
import TaskEditor from "./TaskEditor/TaskEditor";
import SolutionCheckContainer from "./SolutionCheckContainer/SolutionCheckContainer";
import Sidebar from "./TaskSidebar/Sidebar";
import SubTaskList from "./SubTaskList/SubTaskList";
import ApiClient from "../../api/client";
import { useRefreshWrapper } from "../../hooks/useRefreshWrapper";
import GameWindow from "./TaskGameWindow/GameWindow";

export type SolutionData = {
	[areaId: string]: string;
};

export type SolutionStatus =
	| "created"
	| "in_progress"
	| "error"
	| "accepted"
	| "rejected"
	| "timeout";

export function Task() {
	const [accessToken] = useRefreshWrapper();
	const { state } = useLocation();
	const { taskGroup } = state;
	const { id, title, description } = taskGroup as TaskGroup;
	const taskGroupId = String(id);
	const [stepsList] = useTask(taskGroupId); // повторяется в steps вызов
	const [activeSubTaskIdx, setActiveSubTaskIdx] = useState(0);
	const activeSubTask = stepsList[activeSubTaskIdx] || null;
	const [activeSubTaskStatus, setActiveSubTaskStatus] =
		useState<SolutionStatus | null>(null);
	const [isTheoryOpen, setTheoryOpen] = useState(false);
	const content = stepsList[activeSubTaskIdx]?.template?.content ?? null;
	const code = content ? content.join("") : content;
	const [codeValue, setCodeValue] = useState(code || "");
	const [solutionId, setSolutionId] = useState<number | null>(null);
	const [solutionData, setSolutionData] = useState<SolutionData | null>(null);

	let handleClickTheory = useCallback(() => {
		setTheoryOpen(!isTheoryOpen);
	}, [isTheoryOpen]);

	const handleShowAnswer = useCallback(() => {
		if (accessToken === null) return;
		new ApiClient(accessToken).get("").then((response) => {});
	}, [accessToken]);

	const handleSubmitSolution = useCallback(() => {
		if (accessToken === null) return;
		if (solutionData === null) return;
		new ApiClient(accessToken)
			.post("/solutions", {
				taskId: activeSubTask.id,
				data: solutionData,
			})
			.then(async (response) => {
				if (response.status == 201) {
					let responseData = await response.json();
					setSolutionId(responseData.id);
				}
			});
	}, [activeSubTask, solutionData, setSolutionId]);

	useEffect(() => {
		setCodeValue(code);
	}, [code]);

	useEffect(() => {
		const interval = setInterval(() => {
			if (accessToken === null || solutionId === null) return;
			new ApiClient(accessToken)
				.get(`/solutions/${solutionId}`)
				.then(async (response) => {
					const responseData = await response.json();
					setActiveSubTaskStatus(responseData.status);
				});
		}, 5000);
		return () => clearInterval(interval);
	}, []);

	useEffect(() => {
		if (activeSubTaskStatus === "accepted") {
			setActiveSubTaskIdx(activeSubTaskIdx + 1);
			setActiveSubTaskStatus(null);
		}
	}, [activeSubTaskStatus]);

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
						{codeValue !== null && (
							<TaskEditor
								codeValue={codeValue}
								setCodeValue={setCodeValue}
								setSolutionData={setSolutionData}
							/>
						)}
						<SolutionCheckContainer
							onShowAnswer={handleShowAnswer}
							onSubmitSolution={handleSubmitSolution}
						/>
					</div>
					<div className={styles.rightPart}>
						<GameWindow solutionId={solutionId} />
						<SubTaskList
							taskGroupId={taskGroupId}
							activeSubTaskIdx={activeSubTaskIdx}
							activeSubTaskStatus={activeSubTaskStatus}
							setActiveSubTaskIdx={setActiveSubTaskIdx}
						/>
						<NextTaskButton />
					</div>
				</div>
			</div>
		</div>
	);
}
