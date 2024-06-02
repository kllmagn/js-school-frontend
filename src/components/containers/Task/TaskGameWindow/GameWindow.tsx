import { useEffect, useState } from "react";
import { SolutionStatus } from "../Task";

type GameWindowProps = {
	solutionId: number | null;
	solutionStatus: SolutionStatus | null;
};

const GameWindow = ({ solutionId, solutionStatus }: GameWindowProps) => {
	const [iframeKey, setIframeKey] = useState(0);
	useEffect(() => {
		setIframeKey(iframeKey + 1);
	}, [solutionId, solutionStatus, iframeKey]);
	return solutionId !== null ? (
		<iframe
			title="game-window"
			key={iframeKey}
			src={`http://localhost:8000/api/v1/solutions/${solutionId}/view`}
			width="100%"
			height="70%"
			style={{
				zIndex: "1",
			}}
			frameBorder="0"
			allowFullScreen
			sandbox="allow-same-origin allow-scripts"
		></iframe>
	) : (
		<div
			style={{
				height: "70%",
				width: "100%",
				backgroundColor: "white",
				zIndex: "1",
			}}
		></div>
	);
};

export default GameWindow;
