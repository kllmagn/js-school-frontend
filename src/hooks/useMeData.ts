import { useEffect, useState } from "react";
import { useRefreshWrapper } from "./useRefreshWrapper";
import ApiClient from "../api/client";

type User = {
	id: number;
	username: string;
	solutions: string;
	solutions_total: number;
};

type UserDetail = {
	detail: string;
};

export function useMeData() {
	let [data, setData] = useState<User>();
	let [accessToken] = useRefreshWrapper();
	useEffect(() => {
		if (accessToken === null) return;
		new ApiClient(accessToken).get("/profile/me").then(async (response) => {
			const text = await response.text();
			if (response.status == 200) {
				let responseData: User = JSON.parse(text);
				setData(responseData);
			} else {
				let responseData: UserDetail = JSON.parse(text);
				console.log(responseData.detail);
			}
		});
	}, [accessToken]);
	return [data];
}

