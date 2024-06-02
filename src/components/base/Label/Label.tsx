import React from "react";

import styles from "./Label.module.css";

type LabelProps = {
	text: String | React.ReactNode;
	secondaryText?: String | React.ReactNode;
};

const Label = ({ text, secondaryText }: LabelProps) => {
	return (
		<div className={styles.labelContainer}>
			<div className={styles.labelPrimary}>{text}</div>
			{secondaryText && (
				<div className={styles.labelSecondary}>{secondaryText}</div>
			)}
		</div>
	);
};

export default Label;
