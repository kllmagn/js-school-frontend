import { Outlet } from "react-router-dom";
import { Header } from "components/containers/Header/Header";
import styles from "./MainLayout.module.css";
import MainContainer from "components/containers/MainContainer/MainContainer";
import { ToastContainer, toast } from 'react-toastify';

const MainLayout = () => {
	return (
		<MainContainer>
			<Header />
			<div className={styles.layoutContainer}>
				<Outlet />
			</div>
            <ToastContainer position="bottom-right"/>
		</MainContainer>
	);
};

export default MainLayout;
