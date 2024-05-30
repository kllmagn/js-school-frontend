import React, { useEffect, useState } from "react";
import styles from "./tasklist.module.css";
import { TaskListElement } from "./TaskListElement/TaskListElement";
import _ from "lodash";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { TaskGroup, useTaskGroupsData } from "../hooks/useTaskgroups";

export function TaskList() {
	const { cardId } = useParams();
	const [taskList] = useTaskGroupsData(cardId);
	return (
        <div className={styles.container}>
            <div className={styles.list}>
                <a className={styles.mainTopic}>Знакомство</a>
                {taskList.map((taskgroup, index) => (
                    <TaskListElement taskGroup={taskgroup} idx={index + 1} />
                ))}
            </div>
        </div>
	);
}
