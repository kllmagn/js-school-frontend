import { Outlet } from "react-router-dom";
import { Header } from "components/containers/Header/Header";
import styles from "./MainLayout.module.css";

const MainLayout = () => {
	return (
		<>
			<Header />
			<div className={styles.layoutContainer}>
				<Outlet />
			</div>
		</>
	);
};

export default MainLayout;
