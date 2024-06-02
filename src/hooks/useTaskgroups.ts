import { useEffect, useState } from "react";
import { useRefreshWrapper } from "./useRefreshWrapper";
import ApiClient from "api/client";

export type TaskGroup = {
	id: number;
	title: string;
	description: string;
	weight: number;
	is_solved: boolean;
	category: string;
	category_id: number;
};

type TaskGroupList = {
	count: number;
	next?: string | null;
	previous?: string | null;
	results: TaskGroup[];
};

type TaskGroupDetail = {
	detail: string;
};

export function useTaskGroupsData(categoryId: string | undefined) {
	let [data, setData] = useState<TaskGroup[]>([]);
	let [accessToken] = useRefreshWrapper();
	useEffect(() => {
		if (categoryId === undefined || !/\d+/.test(categoryId)) {
			return;
		}
		if (accessToken === null) return;
		new ApiClient(accessToken)
			.get(`/taskgroups?category__id=${categoryId}`)
			.then(async (response) => {
				const text = await response.text();
				if (response.status === 200) {
					let responseData: TaskGroupList = JSON.parse(text);
					setData(responseData.results);
				} else {
					let responseData: TaskGroupDetail = JSON.parse(text);
					console.log(responseData.detail);
				}
			});
	}, [accessToken, categoryId]);
	return [data];
}
