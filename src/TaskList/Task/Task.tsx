import React, { useCallback, useEffect, useState } from "react";
import styles from "./task.module.css";
import { TheorySidebar } from "../../modals/TheorySidebar/TheorySidebar";
import { NextTaskButton } from "./NextTaskButton/NextTaskButton";
import { useLocation, useParams } from "react-router-dom";
import { useTask } from "../../hooks/useTask";
import { TaskGroup } from "../../hooks/useTaskgroups";
import TaskEditor, { CodeArea } from "./TaskEditor/TaskEditor";
import SolutionCheckContainer from "./SolutionCheckContainer/SolutionCheckContainer";
import Sidebar from "./TaskSidebar/Sidebar";
import SubTaskList from "./SubTaskList/SubTaskList";
import ApiClient from "../../api/client";
import { useRefreshWrapper } from "../../hooks/useRefreshWrapper";
import GameWindow from "./TaskGameWindow/GameWindow";

export type SolutionStatus =
	| "created"
	| "in_progress"
	| "error"
	| "accepted"
	| "rejected"
	| "timeout";

function splitCodeIntoAreas(
	code: string,
	areaMapping: { [lineIndex: string]: number },
): CodeArea[] {
	const lines = code.split("\n");
	const codeAreas: CodeArea[] = [];
	let currentArea: string[] = [];
	for (let i = 0; i < lines.length; i++) {
		if (areaMapping[i]) {
			if (currentArea.length > 0) {
				codeAreas.push({
					areaId: null,
					code: currentArea.join("\n"),
				});
				currentArea = [];
			}
			codeAreas.push({
				areaId: areaMapping[i],
				code: "// ваш код здесь",
			});
		} else {
			// This line doesn't have an areaId, so add it to the current area
			currentArea.push(lines[i]);
		}
	}
	// Add the last area
	if (currentArea.length > 0) {
		codeAreas.push({
			areaId: null,
			code: currentArea.join("\n"),
		});
	}
	return codeAreas;
}

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
	const code = stepsList[activeSubTaskIdx]?.template?.content ?? null;
	const [codeAreas, setCodeAreas] = useState<CodeArea[]>([]);
	const [codeValue, setCodeValue] = useState(code || "");
	const [solutionId, setSolutionId] = useState<number | null>(null);

	let handleClickTheory = useCallback(() => {
		setTheoryOpen(!isTheoryOpen);
	}, [isTheoryOpen]);

	const handleShowAnswer = useCallback(() => {
		if (accessToken === null) return;
		new ApiClient(accessToken).get("").then((response) => {});
	}, [accessToken]);

	const handleSubmitSolution = useCallback(() => {
		if (accessToken === null) return;
		if (codeAreas.length === 0) return;
		// create solutionData object from codeAreas, key - areaId, value - code
		let solutionData: { [areaId: string]: string } = {};
		for (const area of codeAreas) {
			if (area.areaId) {
				solutionData[String(area.areaId)] = area.code;
			}
		}
		new ApiClient(accessToken)
			.post("/solutions", {
				task_id: activeSubTask.id,
				data: solutionData,
			})
			.then(async (response) => {
				if (response.status == 201) {
					let responseData = await response.json();
					setSolutionId(responseData.id);
				} else {
					setSolutionId(null);
				}
			});
	}, [activeSubTask, codeAreas, accessToken]);

	useEffect(() => {
		setCodeValue(code);
	}, [code]);

	useEffect(() => {
		if (codeValue === null || activeSubTask === null) return;
		setCodeAreas(
			splitCodeIntoAreas(codeValue, activeSubTask.template.area_mapping),
		);
	}, [codeValue, activeSubTask]);

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
								data={codeAreas}
								setAreaData={(idx, code) => {
									console.log(idx, "setting", code);
									setCodeAreas((prev) => {
										prev[idx] = { ...prev[idx], code };
										return [...prev];
									});
								}}
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
