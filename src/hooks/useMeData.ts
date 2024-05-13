import { useEffect, useState } from "react";
import { useRefreshWrapper } from "./useRefreshWrapper";

type User = {
    id: number;
    username: string;
    solutions: string;
    solutions_total: number;
};


type UserDetail = {
    detail: string;
}
    
export function useMeData() {
    let [data, setData] = useState<User>();
    let [accessToken] = useRefreshWrapper();
    console.log("accessTokenMeData", accessToken);
    useEffect(() => {
        fetch("http://localhost:8000/api/v1/profile/me", {
            method: "GET",
            headers: {
                "accept": "application/json",
                "Content-Type": "application/json",
                "Authorization": `Bearer ${accessToken}`
            },
        }).then(async (response) => {
            const text = await response.text();
            if (response.status == 200) {
                let responseData: User = JSON.parse(text);
                setData(responseData);
            } else {
                let responseData: UserDetail = JSON.parse(text);
                console.log(responseData.detail);
            }
        });
    }, [accessToken]);
    return [data];
}
