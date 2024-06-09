import React from "react";
import styles from "./Button.module.less"
import classNames from "classnames";

type ButtonProps = {
	mode?: "primary" | "secondary" | "warning" | "danger";
	outlined?: Boolean;
	stretched?: Boolean;
	size?: "small" | "medium" | "large";
	rounded?: Boolean;
	onClick?: () => void;
	children: String | React.ReactNode;
} & React.DetailedHTMLProps<
	React.ButtonHTMLAttributes<HTMLButtonElement>,
	HTMLButtonElement
>;

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
                styles[mode],
				outlined && styles.outlined,
				styles[size],
				rounded && styles.rounded,
				stretched && styles.stretched,
			)}
			style={{
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
