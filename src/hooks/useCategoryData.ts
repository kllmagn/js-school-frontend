import { useEffect, useState } from "react";
import { accessTokenSelector, refreshTokenSelector } from "../redux/token/token.selector";
import { useDispatch, useSelector } from "react-redux";
import { setTokenAccess } from "../redux/token/token.slice";
import { useRefreshWrapper } from "./useRefreshWrapper";

type Category = {
    id: number;
    title: string;
    description: string;
};

type CategoryList = {
    count: number,
    next?: string | null,
    previous?:	string | null,
    results: Category[],
};

type CategoryDetail = {
    detail: string;
}
    
export function useCategoryData(levelId: number) {
    let [data, setData] = useState<Category[]>([]);
    let [accessToken] = useRefreshWrapper();
    useEffect(() => {
        fetch(`http://localhost:8000/api/v1/categories?level__id=${levelId}`, {
            method: "GET",
            headers: {
                "accept": "application/json",
                "Content-Type": "application/json",
                "Authorization": `Bearer ${accessToken}`
            },
        }).then(async (response) => {
            const text = await response.text();
            if (response.status == 200) {
                let responseData: CategoryList = JSON.parse(text);
                setData(responseData.results.sort((b, a) => b.id - a.id));
            } else {
                let responseData: CategoryDetail = JSON.parse(text);
                console.log(responseData.detail);
            }
        });
    }, [accessToken]);
    return [data];
}
