import React from "react";
import styles from "./Button.module.css";
import classNames from "classnames";


type ButtonProps = {
	mode?: "primary" | "secondary" | "warning" | "danger";
	outlined?: Boolean;
	stretched?: Boolean;
	size?: "small" | "medium" | "large";
	rounded?: Boolean;
	onClick?: () => void;
	children: String | React.ReactNode;
} & React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

const ButtonColors = {
	primary: "#5AD77D",
	secondary: "#515151",
	warning: "orange",
	danger: "crimson",
};

const Button = ({
	mode = "primary",
	outlined = false,
	size = "medium",
	rounded = false,
	onClick,
	children,
	stretched = false,
    ...rest
}: ButtonProps) => {
	return (
		<button
			className={classNames(
				styles.base,
				outlined && styles.outlined,
				styles[size],
				rounded && styles.rounded,
				stretched && styles.stretched,
			)}
			style={{
				...({
					"--button-main-color": ButtonColors[mode],
				} as React.CSSProperties),
				width: stretched ? "100%" : "auto",
			}}
			onClick={onClick}
            {...rest}
		>
			{children}
		</button>
	);
};

export default Button;
