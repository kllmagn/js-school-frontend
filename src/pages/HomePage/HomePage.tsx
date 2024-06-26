import { useCategoryLevelData } from "hooks/useCategoryLevels";
import styles from "./HomePage.module.css";
import Level from "components/containers/Level/Level";
import { AnimationSkeleton } from "components/skeletons/AnimationSkeleton/AnimationSkeleton";

const HomePage = () => {
	const [data, loading] = useCategoryLevelData();
	return (
		<>
			{loading ? (
				<AnimationSkeleton />
			) : (
				data
					.sort((a, b) => a.order - b.order)
					.map((item) => (
						<Level
							key={item.id}
							id={item.id}
							title={item.title}
							description={item.description}
							order={item.order}
						/>
					))
			)}
		</>
	);
};

export default HomePage;
