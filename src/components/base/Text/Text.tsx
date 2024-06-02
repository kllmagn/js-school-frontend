import styles from "./Text.module.css";

type TextProps = {
	font?: "gilroyBold" | "gilroyLight" | "knewave";
	children: React.ReactNode;
};

const Text = ({ font = "gilroyLight", children }: TextProps) => {
	return <div className={styles[font]}>{children}</div>;
};

export default Text;
