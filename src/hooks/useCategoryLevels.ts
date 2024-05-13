import { useEffect, useState } from "react";
import { useRefreshWrapper } from "./useRefreshWrapper";

type CategoryLevel = {
    id: number;
    title: string;
    description: string;
    order: number;
};

type CategoryLevelList = {
    count: number,
    next?: string | null,
    previous?:	string | null,
    results: CategoryLevel[],
};

type CategoryLevelDetail = {
    detail: string;
}
    
export function useCategoryLevelData() {
    let [data, setData] = useState<CategoryLevel[]>([]);
    let [accessToken] = useRefreshWrapper();
    useEffect(() => {
        fetch("http://localhost:8000/api/v1/category_levels", {
            method: "GET",
            headers: {
                "accept": "application/json",
                "Content-Type": "application/json",
                "Authorization": `Bearer ${accessToken}`
            },
        }).then(async (response) => {
            const text = await response.text();
            if (response.status == 200) {
                let responseData: CategoryLevelList = JSON.parse(text);
                setData(responseData.results);
            } else {
                let responseData: CategoryLevelDetail = JSON.parse(text);
                console.log(responseData.detail);
            }
        });
    }, [accessToken]);
    return [data];
}
