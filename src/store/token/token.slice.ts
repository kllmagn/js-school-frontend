import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export type AuthenticationState = {
	access: string | null;
	refresh: string | null;
};

const initialState: AuthenticationState = {
	access: null,
	refresh: null,
};

const tokenStore = createSlice({
	name: "tokenStore",
	initialState,
	reducers: {
		setTokenAccess(state, action: PayloadAction<string | null>) {
			state.access = action.payload;
		},
		setTokenRefresh(state, action: PayloadAction<string | null>) {
			state.refresh = action.payload;
		},
	},
});

export const { setTokenAccess, setTokenRefresh } = tokenStore.actions;
export default tokenStore.reducer;
