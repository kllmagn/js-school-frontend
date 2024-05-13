import React from 'react';
import styles from './taskcontent.module.css';
import Iframe from 'react-iframe';
import { type } from '@testing-library/user-event/dist/type';


export function TaskContent() {
    const htmldoc = "game.html";
  return (
    <div className={styles.container} style={{flexBasis:'50%'}}>
        {/* здесь должен быть span кнопка для уменьшения/двигания окна*/}
        <div className={styles.modal}>
            <div className={styles.menu}></div>
            <div className={styles.notification}></div>
            <div className={styles.content}>
                <div className={styles.modal}>
                    {/* здесь должны быть еще 1 див*/}
                    <div className={styles.zoomer}>
                    <iframe src={htmldoc} style={{width: '100%', height: '100%'}}/>
                    </div>
                </div>
                {/* здесь должны быть еще два дива*/}
            </div>
            <div className={styles.goals}>
                <div className={styles.goalsHeading}>
                    <span>
                        <span className={styles.goalsCount}>Выполнено 0 из 3</span>
                    </span>
                </div>
                <div className={styles.goalsContent}>
                    <ol className={styles.goalsList}>
                        <li>- Замените действие кнопки</li>
                        <li>- Сделайте шпагат</li>
                        <li>- Посадите дерево</li>
                    </ol>
                </div>
            </div>
        </div>
    </div>
  );
}
