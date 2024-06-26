import { useState } from "react";
import TheorySidebarButton from "./TheorySidebarButton";
import { TheorySidebarModal } from "./TheorySidebarModal";

type TheorySidebarProps = {
	title: string | undefined;
	description: string | undefined;
};

const TheorySidebar = ({ title, description }: TheorySidebarProps) => {
	const [isOpen, setIsOpen] = useState<boolean>();
	return (
		<>
			<TheorySidebarButton handleClickTheory={() => setIsOpen(true)} />
			{isOpen && (
				<TheorySidebarModal
					handleClickTheory={() => setIsOpen(false)}
					description={description}
					title={title}
				/>
			)}
		</>
	);
};

export default TheorySidebar;
