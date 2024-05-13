import { createSelector } from "@reduxjs/toolkit";
import { AppState } from "../store";

export const authenticationSelector = (state: AppState) => state.token;

export const accessTokenSelector = createSelector(authenticationSelector, token => token.access);
export const refreshTokenSelector = createSelector(authenticationSelector, token => token.refresh);
