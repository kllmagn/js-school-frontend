import { useEffect, useState } from "react";
import { useRefreshWrapper } from "./useRefreshWrapper";
import ApiClient from "api/client";

type LeaderboardList = {
	count: number;
	next?: string;
	previous?: string;
    results: Leaderboard[];
};

export type Leaderboard = {
	id: number; 
	username: string;
	solutions?: string;
	solutions_total?: string;
	avatar?: string;
	rank?: string;
    rank_position: number;
};



export type LeaderboardDetail = {
	detail: string;
};

export function useLeaderboardData():[Leaderboard[], boolean] {
    const [loading, setLoading] = useState(true);
	let [data, setData] = useState<Leaderboard[]>([]);
	let [accessToken] = useRefreshWrapper();
	useEffect(() => {
		if (accessToken === null) return;
        setLoading(true);
		new ApiClient(accessToken).get(`/users/?ordering=-rank&page=1&page_size=10`).then(async (response) => {
			const text = await response.text();
			if (response.status === 200) {
				let responseData: LeaderboardList= JSON.parse(text);
				setData(responseData.results);
			} else {
				let responseData: LeaderboardDetail = JSON.parse(text);
				console.log(responseData.detail);
			}
		})
        .finally(() => {
            setLoading(false);
        });
        
	}, [accessToken]);
	return [data, loading];
}
