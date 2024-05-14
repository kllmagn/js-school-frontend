import { useEffect, useState } from "react";
import {
	accessTokenSelector,
	refreshTokenSelector,
} from "../redux/token/token.selector";
import { useDispatch, useSelector } from "react-redux";
import { setTokenAccess } from "../redux/token/token.slice";
import ApiClient from "../api/client";

export function useRefreshWrapper() {
	let accessToken = useSelector(accessTokenSelector);
	let refreshToken = useSelector(refreshTokenSelector);
	const dispatch = useDispatch();
	useEffect(() => {
		if (refreshToken === null) {
			return;
		}
		if (accessToken === null) return;
		new ApiClient(accessToken).get("/profile/me").then(async (response) => {
			if (response.status != 401) {
				return;
			}
			const responseRefresh = await fetch(
				"http://localhost:8000/api/v1/profile/token/refresh/",
				{
					method: "POST",
					headers: {
						accept: "application/json",
						"Content-Type": "application/json",
					},
					body: JSON.stringify({
						refresh: refreshToken,
					}),
				},
			);
			const data = JSON.parse(await responseRefresh.text());
			const token = data.access;
			dispatch(setTokenAccess(token));
		});
	}, [accessToken]);
	return [accessToken];
}