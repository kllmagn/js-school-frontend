import styles from "./theorysidebar.module.css";

type Props = {
	handleClickTheory: () => void;
	description: string | undefined;
	title: string | undefined;
};

export function TheorySidebar({
	handleClickTheory,
	description,
	title,
}: Props) {
	return (
		<div className={styles.container}>
			<div className={styles.theoryLayout}>
				<div className={styles.theoryBar}>
					<svg
						className={styles.closeSvg}
						onClick={handleClickTheory}
						width="50"
						height="50"
						viewBox="0 0 64 64"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M22.6065 21.3934C22.216 21.0029 21.5828 21.0029 21.1923 21.3934C20.8018 21.7839 20.8018 22.4171 21.1923 22.8076L22.6065 21.3934ZM40.9913 42.6066C41.3818 42.9971 42.015 42.9971 42.4055 42.6066C42.796 42.2161 42.796 41.5829 42.4055 41.1924L40.9913 42.6066ZM21.1923 41.1924C20.8018 41.5829 20.8018 42.2161 21.1923 42.6066C21.5828 42.9971 22.216 42.9971 22.6065 42.6066L21.1923 41.1924ZM42.4055 22.8076C42.796 22.4171 42.796 21.7839 42.4055 21.3934C42.015 21.0029 41.3818 21.0029 40.9913 21.3934L42.4055 22.8076ZM21.1923 22.8076L40.9913 42.6066L42.4055 41.1924L22.6065 21.3934L21.1923 22.8076ZM22.6065 42.6066L42.4055 22.8076L40.9913 21.3934L21.1923 41.1924L22.6065 42.6066Z"
							fill="#C0C0C0"
						/>
					</svg>
				</div>
				<div className={styles.textContainer}>
					<a className={styles.title}>{title ? title : ""}</a>
					<a className={styles.mainText}>{description ? description : ""}</a>
				</div>
			</div>
		</div>
	);
}
