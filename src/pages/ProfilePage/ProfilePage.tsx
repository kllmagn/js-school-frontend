import styles from "./ProfilePage.module.less";
import { useMeData } from "hooks/useMeData";
import DoubleViewBox from "components/containers/DoubleViewBox/DoubleViewBox";
import { AnimationSkeleton } from "components/skeletons/AnimationSkeleton/AnimationSkeleton";
import { ProfileLeftPart } from "./ProfileLeftPart/ProfileLeftPart";
import { useTask } from "hooks/useTask";

export const ProfilePage = () => {
	const [userData, loading] = useMeData();
    const [tasks] = useTask(undefined, true);
	return (
		<>
			{loading ? (
				<AnimationSkeleton />
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
							<span className={styles.rankInfo}>
                                {`Рейтинг: #${userData?.rank_position} (${userData?.rank} очков)`}
                            </span>
							<div className={styles.solvedTasksContainer}>
								<span className={styles.solvedTasksHeader}>
									Решенные задачи
								</span>
								<div className={styles.solvedTaskList}>
									{
                                        tasks.map((task) => (
                                            <span>{task.id} - {task.description}</span>
                                        ))
                                    }
								</div>
							</div>
						</>
					}
				/>
			)}
		</>
	);
};
