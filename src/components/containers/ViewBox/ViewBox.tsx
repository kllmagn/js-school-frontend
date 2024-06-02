import Text from "components/base/Text";
import styles from "./ViewBox.module.css";

type ViewBoxProps = {
	name?: string;
	children: React.ReactNode;
};

const ViewBox = ({ name, children }: ViewBoxProps) => {
	return (
		<div className={styles.viewBoxContainer}>
			{name && <Text font="gilroyBold">{name}</Text>}
			{children}
		</div>
	);
};

export default ViewBox;
