import { CardList } from '../../CardList/CardList';
import styles from './level.module.css';

type Level = {
    id: number;
    title: string,
    description: string,
    order: number,
}

export const Level = ({id, title, description, order}: Level) => {
    return (
        <div className={styles.container}>
        <div className={styles.text}>
            <a className={styles['knewave-regular']}>Уровень {order}: {title}</a>
            <a>{description}</a>
            <CardList levelId={id}/>
        </div>
        </div>
    )
}