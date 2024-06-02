import { Reducer, UnknownAction, combineReducers, createStore } from "redux";
import { AuthenticationState } from "./token/token.slice";
import token from "./token/token.slice";

export type AppState = {
	token: AuthenticationState;
};

export type AppReducer = {
	token: Reducer<AuthenticationState>;
};

export const rootReducer = combineReducers<AppReducer>({ token });

const item = localStorage.getItem("reduxState");
const persistedState = item ? JSON.parse(item) : {};
export const store = createStore<AppState, UnknownAction>(
	rootReducer,
	persistedState,
);
store.subscribe(() => {
	localStorage.setItem("reduxState", JSON.stringify(store.getState()));
});
