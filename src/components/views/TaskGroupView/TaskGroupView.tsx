import React, { useCallback, useEffect, useRef, useState } from "react";
import styles from "./TaskGroupView.module.less";
import { useLocation } from "react-router-dom";
import { useTask } from "hooks/useTask";
import { TaskGroup } from "hooks/useTaskgroups";
import CodeEditor from "./CodeEditor/CodeEditor";
import SolutionCheckContainer from "./SolutionCheckContainer/SolutionCheckContainer";
import SubTaskList from "./TaskListView/TaskListView";
import ApiClient from "api/client";
import { refreshWrapper, useRefreshWrapper } from "hooks/useRefreshWrapper";
import GameWindow from "./GameView";
import { useDispatch, useSelector } from "react-redux";
import { refreshTokenSelector } from "store/token/token.selector";
import { splitCodeIntoAreas } from "./CodeEditor/utils";
import { CodeArea } from "./CodeEditor/types";
import { SolutionStatus } from "./TaskListView/TaskView/types";
import TheorySidebar from "components/modals/TheorySidebar/TheorySidebar";

function useInterval(callback: () => void, delay: number) {
	const savedCallback = useRef<() => void>();

	// Remember the latest callback.
	useEffect(() => {
		savedCallback.current = callback;
	}, [callback]);

	// Set up the interval.
	useEffect(() => {
		function tick() {
			savedCallback.current && savedCallback.current();
		}
		if (delay !== null) {
			let id = setInterval(tick, delay);
			return () => clearInterval(id);
		}
	}, [delay]);
}

export function TaskGroupView() {
	const [accessToken] = useRefreshWrapper(); // токен доступа
	const refreshToken = useSelector(refreshTokenSelector);
	const { state } = useLocation(); // состояние роутера
	const { taskGroup } = state; // информация о задаче
	const { id, title, description } = taskGroup as TaskGroup;
	const taskGroupId = String(id);
	const [stepsList, loading] = useTask(taskGroupId); // повторяется в steps вызов
	const [activeSubTaskIdx, setActiveSubTaskIdx] = useState(0);
	const activeSubTask = stepsList[activeSubTaskIdx] || null;
	const [activeSubTaskStatus, setActiveSubTaskStatus] =
		useState<SolutionStatus | null>(null);
	const code = stepsList[activeSubTaskIdx]?.template?.content ?? null;
	const [codeAreas, setCodeAreas] = useState<CodeArea[]>([]);
	const [codeValue, setCodeValue] = useState(code || "");
	const [solutionId, setSolutionId] = useState<number | null>(null);
	const [loadingGame, setLoadingGame] = useState(false);

	const dispatch = useDispatch();

	const handleShowAnswer = useCallback(() => {
		if (accessToken === null) return;
		new ApiClient(accessToken)
			.get(`/tasks/${activeSubTask.id}/answer`)
			.then((response) => {
				if (response.status !== 200) return;
				response.json().then((data) => {
					setCodeValue(data.answer);
				});
			});
	}, [accessToken, activeSubTask]);

	const handleSubmitSolution = useCallback(() => {
		setLoadingGame(true);
		if (accessToken === null || codeAreas.length === 0) return;

		let solutionData: { [areaId: string]: string } = {};
		for (const area of codeAreas) {
			if (area.areaId) {
				solutionData[String(area.areaId)] = area.code + "\n";
			}
		}
		setActiveSubTaskStatus(null);
		setSolutionId(null);
		new ApiClient(accessToken)
			.post("/solutions", {
				task_id: activeSubTask.id,
				data: solutionData,
			})
			.then(async (response) => {
				if (response.status === 201) {
					let responseData = await response.json();
					console.log("settings solution id", responseData);
					setSolutionId(responseData.id);
					setActiveSubTaskStatus(responseData.status_verbose);
				}
			});
	}, [activeSubTask, codeAreas, accessToken]);

	useEffect(() => {
		console.log("settings new code value");
		setCodeValue(code);
	}, [code]);

	useEffect(() => {
		console.log("setting new code areas", codeValue, activeSubTask);
		if (codeValue === null || activeSubTask === null) return;
		setCodeAreas(
			splitCodeIntoAreas(codeValue, activeSubTask.template.area_mapping),
		);
	}, [codeValue, activeSubTask]);

	useInterval(() => {
		console.log("checking solution status", accessToken, solutionId);
		if (accessToken === null || solutionId === null) return;
		refreshWrapper(dispatch, accessToken, refreshToken);
		new ApiClient(accessToken)
			.get(`/solutions/${solutionId}`)
			.then(async (response) => {
				if (response.status !== 200) return;
				setLoadingGame(false);
				const responseData = await response.json();
				setActiveSubTaskStatus(responseData.status_verbose);
			});
	}, 5000);

	useEffect(() => {
		console.log("new subtask status", activeSubTaskStatus);
		if (
			activeSubTaskStatus === SolutionStatus.ACCEPTED &&
			activeSubTaskIdx < stepsList.length - 1
		) {
			setActiveSubTaskIdx(activeSubTaskIdx + 1);
			setActiveSubTaskStatus(null);
		}
	}, [activeSubTaskStatus, activeSubTaskIdx, stepsList.length]);

	return (
		<div className={styles.taskContainer}>
			<div className={styles.taskContainerInner}>
				<div className={styles.taskLayout}>
					<TheorySidebar title={title} description={description} />
					<div className={styles.leftPart}>
						{codeValue !== null && (
							<CodeEditor
								data={codeAreas}
								setAreaData={(idx, code) => {
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
							canSubmitSolution={
								accessToken !== null &&
								(activeSubTaskStatus === null ||
									![
										SolutionStatus.IN_PROGRESS,
										SolutionStatus.CREATED,
									].includes(activeSubTaskStatus))
							}
						/>
					</div>
					<div className={styles.rightPart}>
						<GameWindow
							loading={loadingGame}
							solutionId={solutionId}
							solutionStatus={activeSubTaskStatus}
						/>
						<SubTaskList
							taskGroupId={taskGroupId}
							activeSubTaskIdx={activeSubTaskIdx}
							activeSubTaskStatus={activeSubTaskStatus}
							setActiveSubTaskIdx={setActiveSubTaskIdx}
						/>
					</div>
				</div>
			</div>
		</div>
	);
}
