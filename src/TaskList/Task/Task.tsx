import React, { useState } from 'react';
import styles from './task.module.css';
import { Sidebar } from './sidebar/Sidebar';
import { TheorySidebar } from '../../modals/TheorySidebar/TheorySidebar';
import { AnswerCheck } from './AnswerCheck/AnswerCheck';
import { StepsTask } from './StepsTask/StepsTask';
import { NextTaskButton } from './NextTaskButton/NextTaskButton';
import { useParams } from 'react-router-dom';
import { useTask } from '../../hooks/useTask';
import Editor from 'react-simple-code-editor';
import Prism, { highlight, languages } from "prismjs"
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';
import 'prismjs/themes/prism.css'; //Example style, you can use another

export function Task() {
  const {description, taskgroupId, title} = useParams();
  const [stepsList] = useTask(taskgroupId);//повторяется в steps вызов
  const [activeStepIdx, setActiveStepIdx] = useState(0);
  let [isTheoryOpen, setTheoryOpen] = useState(false);
  let handleClickTheory = () => {
    setTheoryOpen(!isTheoryOpen);
  };
  const showEditor = stepsList.length > 0;
  return (
    <div className={styles.taskContainer}>
      { isTheoryOpen && <TheorySidebar handleClickTheory={handleClickTheory} description={description} title={title}/>}
      <div className={styles.taskContainerInner}>
        
        <div className={styles.taskLayout}>
          <Sidebar handleClickTheory={handleClickTheory}></Sidebar>
            <div className={styles.leftPart}>
              {
                showEditor &&
                <Editor
                  value={stepsList[activeStepIdx].template?.content}
                  onValueChange={code => console.log(code)}
                  highlight={code => highlight(code, Prism.languages.javascript, "javascript")}
                  padding={10}
                  style={{
                    fontFamily: '"Fira code", "Fira Mono", monospace',
                    fontSize: 12,
                    width:'100%',
                    height:'95%',
                  }}
                />
              }
              <AnswerCheck></AnswerCheck>
            </div>
            <div className={styles.rightPart}>
              <div style={{width:'100%', height:'70%', zIndex: '1'}}/>
              <StepsTask taskgroupId={taskgroupId} setActiveStepIdx={setActiveStepIdx}></StepsTask>
              <NextTaskButton></NextTaskButton>
            </div>
        </div>
      </div>
    </div>
  );
}
