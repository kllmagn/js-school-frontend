import { useEffect, useState } from "react";
import { useRefreshWrapper } from "./useRefreshWrapper";
import ApiClient from "api/client";

export type Template = {
	content: string;
	area_mapping: { [key: string]: number };
};

export type Task = {
	id: number; //в бэке почему-то необяз
	description: string;
	is_solved?: boolean;
	group_id: number;
	group?: number;
	template: Template;
};

type TaskList = {
	count: number;
	next?: string | null;
	previous?: string | null;
	results: Task[];
};

type TaskDetail = {
	detail: string;
};

export function useTask(taskgroupId?: string | undefined, useSolved?: boolean): [Task[], boolean] {
	let [data, setData] = useState<Task[]>([]);
	let [accessToken] = useRefreshWrapper();
	const [loading, setLoading] = useState(true);
	useEffect(() => {
		if (accessToken === null) return;
		setLoading(true);
        const url = useSolved ? `/tasks?is_solved=1&ordering=-id` : `/tasks?group__id=${taskgroupId}&ordering=order`;
		new ApiClient(accessToken)
			.get(url)
			.then(async (response) => {
				const text = await response.text();
				if (response.status === 200) {
					let responseData: TaskList = JSON.parse(text);
					setData(responseData.results);
				} else {
					let responseData: TaskDetail = JSON.parse(text);
					console.log(responseData.detail);
				}
			})
			.finally(() => {
				setLoading(false);
			});
	}, [accessToken, taskgroupId]);
	return [data, loading];
}
