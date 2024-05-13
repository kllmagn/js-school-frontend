import React from 'react';
import styles from './answercheck.module.css';

export function AnswerCheck() {

  return (
    
    <div className={styles.container}>
        <div className={styles.listButtons}>
             <button className={styles.showAnswer}>  Показать ответ</button>
            <button className={styles.checkDecision}>Проверить решение</button>
        </div>
    </div>

  );
}
