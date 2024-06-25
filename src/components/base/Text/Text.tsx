import classNames from "classnames";
import styles from "./Text.module.less";

type TextProps = {
	font?: "gilroyBold" | "gilroyLight" | "knewave";
	size?: "micro" | "mini" | "small" | "medium" | "large";
	children: React.ReactNode;
};

const Text = ({
	font = "gilroyLight",
	size = "medium",
	children,
}: TextProps) => {
	return (
		<div className={classNames(styles[font], styles[size])}>{children}</div>
	);
};

export default Text;
