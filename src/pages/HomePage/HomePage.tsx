import { useCategoryLevelData } from "hooks/useCategoryLevels";
import styles from "./HomePage.module.css";
import { Level } from "components/containers/Level/Level";

const HomePage = () => {
	const [data] = useCategoryLevelData();
	return (
		<div className={styles.container}>
			{data
				.sort((a, b) => a.order - b.order)
				.map((item) => (
					<Level
						key={item.id}
						id={item.id}
						title={item.title}
						description={item.description}
						order={item.order}
					/>
				))}
		</div>
	);
};

export default HomePage;
