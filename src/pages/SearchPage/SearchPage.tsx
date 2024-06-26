import SearchBox from "components/inputs/SearchBox";
import styles from "./SearchPage.module.css";
import { useEffect, useState } from "react";
import { SearchElement } from "./SearchElement/SearchElement";
import { useRefreshWrapper } from "hooks/useRefreshWrapper";
import { fetchWithQueryParams } from "api/utils";
import { AnimationSkeleton } from "components/skeletons/AnimationSkeleton/AnimationSkeleton";

type UsersList = {
	count: number;
	next?: string;
	previous?: string;
	results: User[];
};

export type User = {
	id: number;
	username: string;
	solutions?: string;
	solutions_total?: string;
	avatar?: string;
	rank?: string;
	rank_position: number;
};

export type UserDetail = {
	detail: string;
};

export function SearchPage() {
	const [searchQuery, setSearchQuery] = useState("");
	const [showResults, setShowResults] = useState(false);
	const [accessToken] = useRefreshWrapper();
	const [loading, setLoading] = useState(true);
	let [data, setData] = useState<User[]>([]);

	useEffect(() => {
		if (accessToken === null) return;
		setLoading(true);
		fetchWithQueryParams(
			`http://localhost:8000/api/v1/users/`,
			{ username: searchQuery },
			{
				method: "GET",
				headers: {
					accept: "application/json",
					"Content-Type": "application/json",
					Authorization: `Bearer ${accessToken}`,
				},
			},
		)
			.then(async (response) => {
				const text = await response.text();
				if (response.status === 200) {
					let responseData: UsersList = JSON.parse(text);
					setData(responseData.results);
					console.log(response.status);
				} else {
					let responseData: UserDetail = JSON.parse(text);
					console.log(responseData.detail);
				}
			})
			.finally(() => {
				setLoading(false);
			});
	}, [accessToken]);

	const handleSearch = async () => {
		setShowResults(true);
	};

	return (
		<div className={styles.list}>
			<span className={styles.mainTopic}>Искать среди пользователей</span>
			<SearchBox
				query={searchQuery}
				setQuery={setSearchQuery}
				onSearch={handleSearch}
			/>
			{loading ? (
				<AnimationSkeleton />
			) : (
				showResults &&
				data.map((category, index) => (
					<SearchElement
						key={category.id}
						id={category.id}
						username={category.username}
						solutions={category.solutions}
						solutions_total={category.solutions_total}
						avatar={category.avatar}
						rank={category.rank}
						rank_position={category.rank_position}
					/>
				))
			)}
		</div>
	);
}
