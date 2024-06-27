const BACKEND_HOST = process.env.REACT_APP_backend_host || window.location.host;
console.log("BACKEND", BACKEND_HOST);

export const formatPath = (path: string, protocol: string = "http") => {
	return `${protocol}://${BACKEND_HOST || ""}${path}`;
};

function createQueryString(params: { [key: string]: string }) {
	return Object.keys(params)
		.map(
			(key) => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`,
		)
		.join("&");
}

export async function fetchWithQueryParams(
	url: string,
	queryParams: { [key: string]: string },
	options: RequestInit,
) {
	const queryString = createQueryString(queryParams);
	return fetch(`${url}?${queryString}`, options);
}
