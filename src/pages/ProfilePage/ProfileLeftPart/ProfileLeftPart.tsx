import AvatarUpload from "components/inputs/AvatarUpload";
import styles from "./ProfileLeftPart.module.css";
import { useLinkClickHandler } from "react-router-dom";
import { useState } from "react";
import avatar from "icons/placeholder.png";
import { useMeData } from "hooks/useMeData";
import avatarDefault from "icons/placeholder.png";

type ProfileLeftPart = {
	avatar: string | undefined;
	username: string | undefined;
};

export const ProfileLeftPart = ({ avatar, username }: ProfileLeftPart) => {
	return (
		<>
			<div className={styles.avatarContainer}>
				<AvatarUpload backgroundSrc={avatar} />
			</div>

			<span
				className={styles.settings}
				onClick={useLinkClickHandler(`/${username}/settings`)}
			>
				Настройки
			</span>
		</>
	);
};
