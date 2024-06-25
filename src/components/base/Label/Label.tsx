import React from "react";

import styles from "./Label.module.less";

type LabelProps = {
	children: String | React.ReactNode;
	secondaryText?: String | React.ReactNode;
	stretch?: Boolean;
};

const Label = ({ children, secondaryText, stretch = false }: LabelProps) => {
	return (
		<div
			className={styles.labelContainer}
			style={{
				width: stretch ? "100%" : "fit-content",
			}}
		>
			<div className={styles.labelPrimary}>{children}</div>
			{secondaryText && (
				<div className={styles.labelSecondary}>{secondaryText}</div>
			)}
		</div>
	);
};

export default Label;
