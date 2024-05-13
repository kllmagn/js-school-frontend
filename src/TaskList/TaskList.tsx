import React, { useEffect, useState } from 'react';
import styles from './tasklist.module.css';
import { TaskListElement } from './TaskListElement/TaskListElement';
import _ from 'lodash';
import { useNavigate, useParams } from 'react-router-dom';
import { TaskGroup, useTaskGroups } from '../hooks/useTaskgroups';

export function TaskList() {
  const {cardId} = useParams();
  const [taskList] = useTaskGroups(cardId);
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <a className={styles.titleCard}>Знакомство</a>
        <svg className={styles.lineSvg}  fill="none" xmlns="http://www.w3.org/2000/svg">
          <line y1="0" x2="100%" y2="0.5" stroke="black"/>
        </svg>
        <div className={styles.list}>
          {
            taskList.map((taskgroup, index) => (
              <TaskListElement
                id={taskgroup.id}
                title={taskgroup.title}
                description={taskgroup.description}
                weight={taskgroup.weight}
                is_solved={taskgroup.is_solved}
                category={taskgroup.category}
                category_id={taskgroup.category_id}
                number = {index+1}
              />
            ))
          }
        </div>
      </div>
    </div>

  );
}
