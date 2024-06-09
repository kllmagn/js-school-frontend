import React from "react";
import { To } from "react-router-dom";

import styles from "./DropdownMenu.module.less";

export type MenuElementProps = {
	text: String | React.ReactNode;
	url?: To;
	icon?: React.ReactNode;
};

export type DropdownMenuProps = {
	menuElements: MenuElementProps[];
};

const MenuElement = ({ text, url, icon }: MenuElementProps) => {
	//const handleClick = url ? useLinkClickHandler(url) : undefined;
	return (
		<span className={styles.menuElementContainer} onClick={undefined}>
			<span className={styles.menuElement}>
				{icon && <span className={styles.menuElementIcon}>{icon}</span>}
				<span className={styles.menuElementContent}>{text}</span>
			</span>
		</span>
	);
};

const DropdownMenu = ({ menuElements }: DropdownMenuProps) => {
	return (
		<div className={styles.dropdownMenu}>
			{menuElements.map((element, index) => (
				<MenuElement key={index} {...element} />
			))}
		</div>
	);
};

export default DropdownMenu;
