import { Outlet } from "react-router-dom";
import { Header } from "components/containers/Header/Header";
import styles from "./MainLayout.module.css";
import MainContainer from "components/containers/MainContainer/MainContainer";

const MainLayout = () => {
	return (
		<MainContainer>
			<Header />
			<div className={styles.layoutContainer}>
				<Outlet />
			</div>
		</MainContainer>
	);
};

export default MainLayout;
