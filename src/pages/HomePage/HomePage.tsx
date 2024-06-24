import { useCategoryLevelData } from "hooks/useCategoryLevels";
import styles from "./HomePage.module.css";
import Level from "components/containers/Level/Level";
import { AnimationPage } from "components/AnimationPage/AnimationPage";

const HomePage = () => {
	const [data, loading] = useCategoryLevelData();
	return (
		<>
        {loading ? <AnimationPage/> : data.sort((a, b) => a.order - b.order).map((item) => (
					<Level
						key={item.id}
						id={item.id}
						title={item.title}
						description={item.description}
						order={item.order}
					/>
				))}
		</>
	);
};

export default HomePage;
