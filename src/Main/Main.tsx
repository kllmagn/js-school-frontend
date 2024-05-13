import {Route, Routes} from "react-router-dom"
import { Home } from "../Home";
import { TaskList } from "../TaskList/TaskList";
import { Task } from "../TaskList/Task/Task";
import { ProfilePage } from '../ProfilePage/ProfilePage'
import { SettingsPage } from "../SettingsPage/SettingsPage";
import { ChangePasswordPage } from "../SettingsPage/ChangePasswordPage/ChangePasswordPage";
import { ChangeMailPage } from "../SettingsPage/ChangeMailPage/ChangeMailPage";
import { DescriptionPage } from "../DescriptionPage/DescriptionPage";

export function Main() {

  return (
    <Routes>
        <Route path="/" Component={Home}/>
        <Route path="/:cardId/tasklist" Component={TaskList} />
        <Route path="/:description/:taskgroupId/:title/task"Component={Task}/>
        <Route path="/profile" Component={ProfilePage} />
        <Route path="/settings" Component={SettingsPage} />
        <Route path="/changePassword" Component={ChangePasswordPage} />
        <Route path="/changeMail" Component={ChangeMailPage} />
        <Route path="/aboutUs" Component={ DescriptionPage } />

    </Routes>
  );
}
