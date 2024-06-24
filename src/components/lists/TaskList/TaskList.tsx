import React from "react";
import styles from "./TaskList.module.css";
import { TaskListElement } from "components/containers/TaskListElement/TaskListElement";
import { useParams } from "react-router-dom";
import { useTaskGroupsData } from "hooks/useTaskgroups";

export function TaskList() {
	const { cardId } = useParams();
	const [taskList] = useTaskGroupsData(cardId);
	return (

            <div className={styles.list}>
                <span className={styles.mainTopic}>Знакомство</span>
                {taskList.map((taskgroup, index) => (
                    <TaskListElement taskGroup={taskgroup} idx={index + 1} />
                    
                ))}
          

            </div>

	);
}
