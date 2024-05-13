import styles from './stepstask.module.css';
import { useTask } from '../../../hooks/useTask';
import { StepElement } from './StepElement/StepElement';

type StepsTask = {
  taskgroupId: string | undefined;
  setActiveStepIdx: (idx: number) => void;
}



export function StepsTask({taskgroupId, setActiveStepIdx}: StepsTask) {
  const [stepsList] = useTask(taskgroupId);

  return (
    <div className={styles.container}>
        <div className={styles.description}>
          <a>Задания:</a>
        {
            stepsList.map((step, index) => (
              <StepElement
                id={step.id}
                description={step.description}
                is_solved={step.is_solved}
                group_id={step.group_id}
                group={step.group}
                template={step.template}
                onStepClick={() => setActiveStepIdx(index)}
              />
            ))
          }
        </div>
    </div>

  );
}
