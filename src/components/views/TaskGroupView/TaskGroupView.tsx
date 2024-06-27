import React, { useCallback, useEffect, useRef, useState } from "react";
import styles from "./TaskGroupView.module.less";
import { useLocation } from "react-router-dom";
import { useTask } from "hooks/useTask";
import { TaskGroup } from "hooks/useTaskgroups";
import CodeEditor from "./CodeEditor/CodeEditor";
import SolutionCheckContainer from "./SolutionCheckContainer/SolutionCheckContainer";
import SubTaskList from "./TaskListView/TaskListView";
import ApiClient from "api/client";
import { useRefreshWrapper } from "hooks/useRefreshWrapper";
import GameWindow from "./GameView";
import { splitCodeIntoAreas } from "./CodeEditor/utils";
import { CodeArea } from "./CodeEditor/types";
import { SolutionStatus } from "./TaskListView/TaskView/types";
import TheorySidebar from "components/modals/TheorySidebar/TheorySidebar";
import { formatPath } from "api/utils";
import useWebSocket from "react-use-websocket"
import { useMeData } from "hooks/useMeData";
import { toast } from 'react-toastify';

enum UserMessageType {
    ENGINE_EVENT = "engine.event",
    SOLUTION_STATUS = "solution.status"
}

type SolutionStatusData = {
    solution_id: number;
    status: SolutionStatus;
}

type EngineEventData = {
    event_type: 'container.stop' | 'container.start';
    container_id: string;
    game_name: string;
    solution_id: number;
};

type UserMessage = { type: UserMessageType.ENGINE_EVENT, data: EngineEventData } | { type: UserMessageType.SOLUTION_STATUS, data: SolutionStatusData };

export function TaskGroupView() {
	const [accessToken] = useRefreshWrapper(); // токен доступа
    const [userData, _] = useMeData();
	const { state } = useLocation(); const { taskGroup } = state; // информация о задаче
	const { id, title, description } = taskGroup as TaskGroup;
	const taskGroupId = String(id);
	const [taskList, __] = useTask(taskGroupId); // повторяется в steps вызов
	const [activeSubTaskIdx, setActiveSubTaskIdx] = useState(0);
	const [activeSubTaskStatus, setActiveSubTaskStatus] =
		useState<SolutionStatus | null>(null);
	const code = taskList[activeSubTaskIdx]?.template?.content ?? null;
	const [codeAreas, setCodeAreas] = useState<CodeArea[]>([]);
	const [codeValue, setCodeValue] = useState(code || "");
	const [solutionId, setSolutionId] = useState<number | null>(null);

	const [isGameLoading, setIsGameLoading] = useState(false);
    const [isGameDisabled, setIsGameDisabled] = useState(true);

    const activeSubTask = taskList[activeSubTaskIdx] || null;

    const USER_WS_URL = userData ? formatPath(`/api/v1/auth/users/${userData.id}`, "ws") : null;
    const { lastJsonMessage } = useWebSocket<UserMessage | null>(
        USER_WS_URL,
        {
            share: false,
            shouldReconnect: () => true,
        },
    )
    // Run when a new WebSocket message is received (lastJsonMessage)
    useEffect(() => {
        if (lastJsonMessage == null) return;
        if (lastJsonMessage.type == UserMessageType.SOLUTION_STATUS && lastJsonMessage.data.solution_id == solutionId) {
            setActiveSubTaskStatus(lastJsonMessage.data.status);
        } else if (lastJsonMessage.type == UserMessageType.ENGINE_EVENT && lastJsonMessage.data.solution_id == solutionId) {
            if (lastJsonMessage.data.event_type == 'container.start') {
                setIsGameDisabled(false);
            } else {
                setIsGameDisabled(true);
            }
        }
    }, [lastJsonMessage])

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
        setIsGameDisabled(true);
		setIsGameLoading(true);
		if (accessToken === null || codeAreas.length === 0) return;

        setSolutionId(null);
		let solutionData: { [areaId: string]: string } = {};
		for (const area of codeAreas) {
			if (area.areaId) {
				solutionData[String(area.areaId)] = area.code + "\n";
			}
		}
		new ApiClient(accessToken)
			.post("/solutions", {
				task_id: activeSubTask.id,
				data: solutionData,
			})
			.then(async (response) => {
				if (response.status === 201) {
                    toast.success("Решение опубликовано!");
					let responseData = await response.json();
					console.log("settings solution id", responseData);
					setSolutionId(responseData.id);
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
        setActiveSubTaskStatus(null);
    }, [activeSubTaskIdx]);

    useEffect(() => {
        switch (activeSubTaskStatus) {
            case SolutionStatus.ACCEPTED:
                toast.success("Решение принято, молодец ;)");
                break;
            case SolutionStatus.REJECTED:
                toast.error("Решение отклонено :(");
                break;
            default:
                break;
        }
    }, [activeSubTaskStatus]);

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
                            disabled={isGameDisabled}
							loading={isGameLoading}
							solutionId={solutionId}
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
