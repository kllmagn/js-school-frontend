import { useEffect, useState } from "react";
import { SolutionStatus } from "../Task";
import { formatPath } from "api/utils";
import styles from "./GameWindow.module.less";
import { ReactComponent as IconController } from "icons/controller.svg";
import { AnimationPage } from "components/AnimationPage/AnimationPage";

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
	useEffect(() => {
		setIframeKey((pred) => pred + 1);
	}, [solutionId, solutionStatus]);

	return (
		<div className={styles.gameWrapper}>
			{solutionId !== null ? (
				<iframe
					className={styles.gameWindow}
					title="game-window"
					key={iframeKey}
					src={formatPath(`/api/v1/solutions/${solutionId}/view`)}
					frameBorder="0"
					allowFullScreen
					sandbox="allow-same-origin allow-scripts"
				></iframe>
			) : (
				<div className={styles.gamePlaceholder}>
					{loading ? <AnimationPage /> : <IconController />}
				</div>
			)}
		</div>
	);
};

export default GameWindow;
