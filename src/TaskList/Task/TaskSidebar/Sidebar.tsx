import React, { useState } from "react";
import styles from "./sidebar.module.css";
import { modalList } from "../../../Header/Profile/Profile";
import { createPortal } from "react-dom";
import { TheorySidebar } from "../../../modals/TheorySidebar/TheorySidebar";

interface Props {
	handleClickTheory: () => void;
}

function Sidebar({ handleClickTheory }: Props) {
	if (!modalList) return null;
	return (
		<>
			<div className={styles.sidebar} onClick={handleClickTheory}>
				<div className={styles.sidebarInner}>
					<a className={styles.titleSidebar}>
						<svg
							className={styles.theorySvg}
							width="10"
							height="10"
							viewBox="0 0 375 291"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M187.5 0L374.995 290.25H0.00549316L187.5 0Z"
								fill="#D9D9D9"
							/>
						</svg>{" "}
						Теория
					</a>
				</div>
			</div>
		</>
	);
}

export default Sidebar;
