import classNames from "classnames";
import Avatar from "components/base/Avatar";
import styles from "./AvatarUpload.module.css";

type AvatarUploadProps = {
	text?: string;
	size?: "small" | "medium" | "large";
	backgroundSrc?: string;
};

const AvatarUpload = ({
	text = "Выберите аватар",
	backgroundSrc,
	size = "medium",
}: AvatarUploadProps) => {
	return (
		<div
			className={styles.avatarUpload}
			style={{
				width:
					size === "small" ? "60px" : size === "medium" ? "100px" : "200px",
				height:
					size === "small" ? "60px" : size === "medium" ? "100px" : "200px",
				// set background image if backgroundSrc is provided, fit it to upload
				backgroundImage: backgroundSrc ? `url(${backgroundSrc})` : "none",
				backgroundSize: "cover",
				backgroundPosition: "center",
			}}
		>
			<label htmlFor="avatar-upload" className={styles.inputFile}>
				{text}
			</label>
			<input id="avatar-upload" type="file" accept="image/*" />
		</div>
	);
};

export default AvatarUpload;
