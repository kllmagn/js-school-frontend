import { useEffect, useState } from "react";
import { useRefreshWrapper } from "./useRefreshWrapper";
import ApiClient from "api/client";
import { Leaderboard, LeaderboardDetail } from "./useLeaderboardData";

export function useChangeAvatar(file: File) {
	const [loading, setLoading] = useState(true);
	let [data, setData] = useState<Leaderboard>();
	let [accessToken] = useRefreshWrapper();
	useEffect(() => {
		setLoading(true);
		fetch(`http://localhost:8000/api/v1/users/me`, {
			method: "PUT",
			headers: {
				accept: "application/json",
				"Content-Type": "multipart/form-data",
				Authorization: `Bearer ${accessToken}`,
			},
		})
			.then(async (response) => {
				const text = await response.text();
				if (response.status === 200) {
					let responseData: Leaderboard = JSON.parse(text);
					setData(responseData);
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
