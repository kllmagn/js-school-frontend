class ApiClient {
	constructor(
		public token: string,
		public apiEndpoint = "localhost:8080",
	) {
		this.apiEndpoint = apiEndpoint;
		this.token = token;
	}

	async get(url: string): Promise<Response> {
		return await fetch(this.apiEndpoint + url, {
			method: "GET",
			headers: {
				accept: "application/json",
				"Content-Type": "application/json",
				Authorization: "Bearer " + this.token,
			},
		});
	}

	async post(url: string, data: any): Promise<Response> {
		return await fetch(this.apiEndpoint + url, {
			method: "POST",
			headers: {
				accept: "application/json",
				"Content-Type": "application/json",
				Authorization: "Bearer " + this.token,
			},
			body: JSON.stringify(data),
		});
	}
}

export default ApiClient;
