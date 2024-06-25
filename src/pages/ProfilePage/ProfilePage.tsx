import styles from "./ProfilePage.module.css";
import avatar from "icons/placeholder.png";
import avatarAlt from "icons/avatarChange.png";
import { useLinkClickHandler } from "react-router-dom";
import { useMeData } from "hooks/useMeData";
import { useState } from "react";
import AvatarUpload from "components/inputs/AvatarUpload/AvatarUpload";
import DoubleViewBox from "components/containers/DoubleViewBox/DoubleViewBox";
import { AnimationPage } from "components/AnimationPage/AnimationPage";
import { ProfileLeftPart } from "./ProfileLeftPart/ProfileLeftPart";

export const ProfilePage = () => {
	const [userData, loading] = useMeData();

	const [imageSrc, setImageSrc] = useState(avatar);

	return (
		<>
			{loading ? (
				<AnimationPage />
			) : (
				<DoubleViewBox
					left={
						<ProfileLeftPart
							avatar={userData?.avatar}
							username={userData?.username}
						></ProfileLeftPart>
					}
					right={
						<>
							<span className={styles.username}>
								{userData ? userData.username : ""}
							</span>
							<span className={styles.ratingHeader}>Рейтинг: #123234</span>
							<div className={styles.readyTasksContainer}>
								<span className={styles.readyTasksHeader}>
									{" "}
									Решенные задачи{" "}
								</span>

								<div className={styles.readyTasks}>
									<span>Задание 1 - делаем игру 2024</span>
									<span>Задание 2 - делаем игру 2024</span>
								</div>
							</div>
						</>
					}
				/>
			)}
		</>
	);
};
