import { useEffect, useState } from "react";
import { useRefreshWrapper } from "./useRefreshWrapper";
import ApiClient from "api/client";

export type User = {
	id: number; 
	username: string;
	solutions?: string;
	solutions_total?: string;
	avatar?: string;
	rank?: string;
    rank_position: number;
};


type UserDetail = {
	detail: string;
};

export function useMeData():[User | undefined, boolean] {
    const [loading, setLoading] = useState(true);
	let [data, setData] = useState<User>();
	let [accessToken] = useRefreshWrapper();
	useEffect(() => {
		if (accessToken === null) return;
        setLoading(true);
		new ApiClient(accessToken).get("/users/me").then(async (response) => {
			const text = await response.text();
			if (response.status === 200) {
				let responseData: User= JSON.parse(text);
				setData(responseData);
			} else {
				let responseData: UserDetail = JSON.parse(text);
				console.log(responseData.detail);
			}
		})
        .finally(() => {
            setLoading(false);
        });
        
	}, [accessToken]);
	return [data, loading];
}
