import React from 'react';
import styles from './tasklistelement.module.css'
import { useLinkClickHandler } from 'react-router-dom';
import { TaskGroup } from '../../hooks/useTaskgroups';

export type TaskListElement = {
  id: number;
  title: string;
  description: string;
  weight: number,
  is_solved: boolean,
  category: string,
  category_id: number,
  number: number
};

export function TaskListElement({id, title, description, weight, is_solved=false, category, category_id, number}: TaskListElement ) {

  return (
    <div className={styles.container} onClick={useLinkClickHandler(`/${description}/${id}/${title}/task`)}>
        <a className={`${styles.title} ${is_solved? styles.solved : ''}`}>
            <a>Задание {number}</a>
            <a>{title} </a>
            <a>очки - {weight} </a>
            <a>{is_solved ? 'Решено' : ''}</a>
        </a>
    </div>

  );
}
