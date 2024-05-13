import { CardList } from "../CardList"
import { useCategoryLevelData} from "../hooks/useCategoryLevels";
import styles from './home.module.css';
import { Level } from "./Level/Level";



export const Home = () => {
  const [data] = useCategoryLevelData();

  const list = data.sort((a, b) => a.order - b.order).map((item) => (
    <Level
      key={item.id}
      id={item.id}
      title={item.title}
      description={item.description}
      order={item.order}
    />));

    return (
        <div className={styles.container}>
          {list}
        </div>
    )
}
