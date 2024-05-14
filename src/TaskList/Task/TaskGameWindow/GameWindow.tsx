type GameWindowProps = {
	solutionId: number | null;
};

const GameWindow = ({ solutionId }: GameWindowProps) => {
	return solutionId !== null ? (
		<iframe
			src={`http://:8080/api/v1/solutions/${solutionId}/view`}
			width="100%"
			height="70%"
			style={{
				zIndex: "1",
			}}
			frameBorder="0"
			allowFullScreen
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
