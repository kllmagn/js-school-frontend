import MainLayout from "./layouts/MainLayout/MainLayout";
import styles from "./App.module.css";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { Route, Routes } from "react-router-dom";
import { DescriptionPage } from "pages/DescriptionPage/DescriptionPage";
import { ChangeMailPage } from "pages/SettingsPage/ChangeMailPage/ChangeMailPage";
import { SettingsPage } from "pages/SettingsPage/SettingsPage";
import { ChangePasswordPage } from "pages/SettingsPage/ChangePasswordPage/ChangePasswordPage";
import { ProfilePage } from "pages/ProfilePage/ProfilePage";
import { TaskList } from "components/lists/TaskList/TaskList";
import { SearchPage } from "pages/SearchPage/SearchPage";
import { Leaderboard } from "pages/LeaderboardPage/LeaderboardPage";
import HomePage from "pages/HomePage/HomePage";
import ViewBoxLayout from "layouts/ViewBoxLayout/ViewBoxLayout";
import { TaskGroupView } from "components/views/TaskGroupView/TaskGroupView";

function App() {
	return (
		<div className={styles.app}>
			<Provider store={store}>
				<Routes>
					<Route path="/" element={<MainLayout />}>
						<Route index element={<HomePage />} />
						<Route path="profile" element={<ProfilePage />} />
						<Route element={<ViewBoxLayout />}>
							<Route path="leaderboard" element={<Leaderboard />} />
							<Route path="search" element={<SearchPage />} />
							<Route path="category/:cardId" element={<TaskList />} />
						</Route>
						<Route
							path="category/:cardId/group/:taskgroupId"
							element={<TaskGroupView />}
						/>
						<Route path="settings/:username" element={<SettingsPage />} />
						<Route
							path="changePassword/:username"
							element={<ChangePasswordPage />}
						/>
						<Route path="changeMail/:username" element={<ChangeMailPage />} />
						<Route path="aboutUs" element={<DescriptionPage />} />
					</Route>
				</Routes>
			</Provider>
		</div>
	);
}

export default App;
