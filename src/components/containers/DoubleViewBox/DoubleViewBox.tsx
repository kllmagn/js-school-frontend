import styles from "./DoubleViewBox.module.css";

type DoubleViewBoxProps = {
	left: React.ReactNode;
	right: React.ReactNode;
};

const DoubleViewBox = ({ left, right }: DoubleViewBoxProps) => {
	return (
		<div className={styles.doubleViewBoxContainer}>
			<div className={styles.viewBoxLeft}>{left}</div>
			<div className={styles.viewBoxRight}>{right}</div>
		</div>
	);
};

export default DoubleViewBox;
