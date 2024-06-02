import styles from "./Avatar.module.css";
import placeholderSrc from "icons/placeholder.png";

type AvatarProps = {
	src?: string;
	size?: "small" | "medium" | "large";
};

const Avatar = ({ src, size = "medium" }: AvatarProps) => {
	return (
		<img
			className={styles.avatar}
			alt="avatar"
			src={src ?? placeholderSrc}
			style={{
				width: size === "small" ? "30px" : size === "medium" ? "50px" : "100px",
				height:
					size === "small" ? "30px" : size === "medium" ? "50px" : "100px",
			}}
		/>
	);
};

export default Avatar;
