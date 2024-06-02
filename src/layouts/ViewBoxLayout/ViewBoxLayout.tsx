import ViewBox from "components/containers/ViewBox/ViewBox";

import { Outlet, useParams } from "react-router-dom";

const ViewBoxLayout = () => {
	const { viewBoxName } = useParams();
	return (
		<ViewBox name={viewBoxName}>
			<Outlet />
		</ViewBox>
	);
};

export default ViewBoxLayout;
