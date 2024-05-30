import { Outlet, Route, Routes } from "react-router-dom";
import { Home } from "../Home";
import { TaskList } from "../TaskList/TaskList";
import { Task } from "../TaskList/Task/Task";
import { ProfilePage } from "../ProfilePage/ProfilePage";
import { SettingsPage } from "../SettingsPage/SettingsPage";
import { ChangePasswordPage } from "../SettingsPage/ChangePasswordPage/ChangePasswordPage";
import { ChangeMailPage } from "../SettingsPage/ChangeMailPage/ChangeMailPage";
import { DescriptionPage } from "../DescriptionPage/DescriptionPage";
import styles from "./layout.module.css";
import { Header } from "../Header/Header";
import { Leaderboard } from "../LeaderboardPage/LeaderboardPage";
import { SearchPage } from "../SearchPage/SearchPage";


const LayoutContainer = ()  => {
    return (
        <>
            <Header/>
            <div className={styles.layoutContainer}>
                <Outlet/>
            </div>
        </>
    )
};

const LayoutContent = ()  => {
    return (
        <div className={styles.layoutContent}>
            <Outlet/>
        </div>
    )
};

export function Main() {
	return (
		<Routes>
            <Route path="/" element={<LayoutContainer />}>
                <Route index element={<Home />} />
                <Route element={<LayoutContent/>}>
                    <Route path="leaderboard" element={<Leaderboard/>} />
                    <Route path="search" element={<SearchPage/>} />
                    <Route path="category/:cardId" element={<TaskList />} />
                    <Route path="category/:cardId/group/:taskgroupId" element={<Task />} />
                    <Route path="profile" element={<ProfilePage />} />
                    <Route path="settings" element={<SettingsPage />} />
                    <Route path="changePassword" element={<ChangePasswordPage />} />
                    <Route path="changeMail" element={<ChangeMailPage />} />
                </Route>
                <Route path="aboutUs" element={<DescriptionPage />} />
            </Route>
		</Routes>
	);
};
