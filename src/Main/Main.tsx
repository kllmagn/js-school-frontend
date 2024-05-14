import { Route, Routes } from "react-router-dom";
import { Home } from "../Home";
import { TaskList } from "../TaskList/TaskList";
import { Task } from "../TaskList/Task/Task";
import { ProfilePage } from "../ProfilePage/ProfilePage";
import { SettingsPage } from "../SettingsPage/SettingsPage";
import { ChangePasswordPage } from "../SettingsPage/ChangePasswordPage/ChangePasswordPage";
import { ChangeMailPage } from "../SettingsPage/ChangeMailPage/ChangeMailPage";
import { DescriptionPage } from "../DescriptionPage/DescriptionPage";

export function Main() {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/category/:cardId" element={<TaskList />} />
			<Route path="/category/:cardId/group/:taskgroupId" element={<Task />} />
			<Route path="/profile" element={<ProfilePage />} />
			<Route path="/settings" element={<SettingsPage />} />
			<Route path="/changePassword" element={<ChangePasswordPage />} />
			<Route path="/changeMail" element={<ChangeMailPage />} />
			<Route path="/aboutUs" element={<DescriptionPage />} />
		</Routes>
	);
}
