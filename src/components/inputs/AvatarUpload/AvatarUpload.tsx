import classNames from "classnames";
import Avatar from "components/base/Avatar";
import styles from "./AvatarUpload.module.css";
import { FC } from "react";
import { upload } from "@testing-library/user-event/dist/upload";
import { url } from "inspector";
import { useChangeAvatar } from "hooks/useChangeAvatar";
import { LeaderboardDetail } from "hooks/useLeaderboardData";
import { useRefreshWrapper } from "hooks/useRefreshWrapper";
import { formatPath } from "api/utils";

type AvatarUploadProps = {
	text?: string;
	size?: "small" | "medium" | "large";
	backgroundSrc?: string;
};

export type UploadProps = {
	onUpload: (data: unknown) => void;
};

const AvatarUpload = ({
	text = "Выберите аватар",
	backgroundSrc,
	size = "medium",
}: AvatarUploadProps) => {
	const [accessToken] = useRefreshWrapper();

	const handleFile = (file: File) => {
		const data: { [key: string]: string | File } = {
			avatar: file,
		};
		const formData = new FormData();
		for (const name in data) {
			formData.append(name, data[name]);
		}
		fetch(formatPath(`/api/v1/users/me`), {
			method: "PUT",
			headers: {
				accept: "application/json",
				Authorization: `Bearer ${accessToken}`,
			},
			body: formData,
		}).then(async (response) => {
			const text = await response.text();
			if (response.status === 200) {
				console.log(response.status);
			} else {
				let responseData: LeaderboardDetail = JSON.parse(text);
				console.log(responseData.detail);
			}
		});
	};

	const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		if (!event.target.files) return;
		handleFile(event.target.files[0]);
	};

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
			<input
				id="avatar-upload"
				type="file"
				accept="image/*"
				onChange={handleFileChange}
			/>
		</div>
	);
};

export default AvatarUpload;
