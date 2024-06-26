import { useEffect, useState } from "react";
import { formatPath } from "api/utils";
import styles from "./GameView.module.less";
import { ReactComponent as IconController } from "icons/controller.svg";
import { SolutionStatus } from "./TaskListView/TaskView/types";
import { SkeletonWrapper } from "components/skeletons/SkeletonWrapper";
import { AnimationSkeleton } from "components/skeletons/AnimationSkeleton/AnimationSkeleton";

type GameWindowProps = {
	loading: boolean;
	solutionId: number | null;
	solutionStatus: SolutionStatus | null;
};

const GameWindow = ({
	loading,
	solutionId,
	solutionStatus,
}: GameWindowProps) => {
	const [iframeKey, setIframeKey] = useState(0);
	const [isFullscreen, setIsFullscreen] = useState(false);

	useEffect(() => {
		setIframeKey((pred) => pred + 1);
	}, [solutionId, solutionStatus]);

	const toggleFullscreen = () => {
		setIsFullscreen((prevState) => !prevState);
	};

	return (
		<div
			className={`${styles.gameWrapper} ${isFullscreen ? styles.fullscreen : ""}`}
		>
			{solutionId !== null ? (
				<>
					<iframe
						className={styles.gameWindow}
						title="game-window"
						key={iframeKey}
						src={formatPath(`/api/v1/solutions/${solutionId}/view`)}
						frameBorder="0"
						allowFullScreen
						sandbox="allow-same-origin allow-scripts"
					></iframe>
					<button
						className={styles.fullscreenButton}
						style={{
							zIndex: 0,
						}}
						onClick={toggleFullscreen}
					>
						Полный экран
					</button>
				</>
			) : (
				<div className={styles.gamePlaceholder}>
					<SkeletonWrapper
						target={<IconController />}
						skeleton={<AnimationSkeleton />}
						isLoading={loading}
					/>
				</div>
			)}
		</div>
	);
};

export default GameWindow;