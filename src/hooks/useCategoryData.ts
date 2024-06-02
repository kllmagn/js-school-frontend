import { useEffect, useState } from "react";
import { useRefreshWrapper } from "./useRefreshWrapper";
import ApiClient from "api/client";

type Category = {
	id: number;
	title: string;
	description: string;
};

type CategoryList = {
	count: number;
	next?: string | null;
	previous?: string | null;
	results: Category[];
};

type CategoryDetail = {
	detail: string;
};

export function useCategoryData(categoryId: number) {
	let [data, setData] = useState<Category | null>(null);
	let [accessToken] = useRefreshWrapper();
	useEffect(() => {
		fetch(`http://localhost:8000/api/v1/categories/${categoryId}`, {
			method: "GET",
			headers: {
				accept: "application/json",
				"Content-Type": "application/json",
				Authorization: `Bearer ${accessToken}`,
			},
		}).then(async (response) => {
			const text = await response.text();
			if (response.status === 200) {
				let responseData: Category = JSON.parse(text);
				setData(responseData);
			} else {
				let responseData: CategoryDetail = JSON.parse(text);
				console.log(responseData.detail);
			}
		});
	}, [accessToken, categoryId]);
	return [data];
}

export function useCategoriesData(levelId: number) {
	let [data, setData] = useState<Category[]>([]);
	let [accessToken] = useRefreshWrapper();
	useEffect(() => {
		if (accessToken === null) return;
		new ApiClient(accessToken)
			.get(`/categories?level__id=${levelId}`)
			.then(async (response) => {
				const text = await response.text();
				if (response.status === 200) {
					let responseData: CategoryList = JSON.parse(text);
					setData(responseData.results.sort((b, a) => b.id - a.id));
				} else {
					let responseData: CategoryDetail = JSON.parse(text);
					console.log(responseData.detail);
				}
			});
	}, [accessToken, levelId]);
	return [data];
}
