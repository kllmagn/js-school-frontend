import { CardList } from "components/lists/CardList/CardList";
import styles from "./Level.module.css";
import ViewBox from "../ViewBox/ViewBox";
import Label from "components/base/Label";
import Text from "components/base/Text";

type LevelProps = {
	id: number;
	title: string;
	description: string;
	order: number;
};

const Level = ({ id, title, description, order }: LevelProps) => {
	return (
		<ViewBox>
            <div className={styles.levelContainer}>
                <Label secondaryText={<Text font="gilroyLight" size="small">{title}</Text>}>
                    <Text font="gilroyBold" size="small">Уровень {order}</Text> 
                </Label>
                <span className={styles.levelDescription}>{description}</span>
                <CardList levelId={id} />
            </div>
        </ViewBox>
	);
};

export default Level;
