import { useEffect, useState } from "react";
import { accessTokenSelector, refreshTokenSelector } from "../redux/token/token.selector";
import { useDispatch, useSelector } from "react-redux";
import { setTokenAccess } from "../redux/token/token.slice";

    
export function useRefreshWrapper() {
    let accessToken = useSelector(accessTokenSelector);
    let refreshToken = useSelector(refreshTokenSelector);
    const dispatch = useDispatch();
    useEffect(() => {
        if (refreshToken === null) {
            return;
        }
        fetch("http://localhost:8000/api/v1/profile/me", {
            method: "GET",
            headers: {
                "accept": "application/json",
                "Content-Type": "application/json",
                "Authorization": `Bearer ${accessToken}`
            },
        }).then(async (response) => {
            if (response.status != 401) {
                return;
            } 
            const responseRefresh = await fetch("http://localhost:8000/api/v1/profile/token/refresh/", {
                method: "POST",
                headers: {
                    "accept": "application/json",
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    "refresh": refreshToken,
                }),
            });
            const data = JSON.parse(await responseRefresh.text());
            const token = data.access;
            console.log("got token", token, "on refresh");
            dispatch(setTokenAccess(token));
        });
    }, [accessToken]);
    return [accessToken];
}
