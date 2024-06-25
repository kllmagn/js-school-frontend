import { useEffect, useState } from "react";
import { useRefreshWrapper } from "./useRefreshWrapper";
import ApiClient from "api/client";

type CategoryLevel = {
	id: number;
	title: string;
	description: string;
	order: number;
};

type CategoryLevelList = {
	count: number;
	next?: string | null;
	previous?: string | null;
	results: CategoryLevel[];
};

type CategoryLevelDetail = {
	detail: string;
};

export function useCategoryLevelData(): [CategoryLevel[], boolean] {
	const [loading, setLoading] = useState(true);
	let [data, setData] = useState<CategoryLevel[]>([]);
	let [accessToken] = useRefreshWrapper();
	useEffect(() => {
		if (accessToken === null) return;
		setLoading(true);
		new ApiClient(accessToken)
			.get("/category_levels")
			.then(async (response) => {
				const text = await response.text();
				if (response.status === 200) {
					let responseData: CategoryLevelList = JSON.parse(text);
					setData(responseData.results);
				} else {
					let responseData: CategoryLevelDetail = JSON.parse(text);
					console.log(responseData.detail);
				}
			})
			.finally(() => {
				setLoading(false);
			});
	}, [accessToken]);
	return [data, loading];
}
