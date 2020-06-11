import {AppState} from "./app.reducers";
import {createSelector} from "@ngrx/store";

export const appState = (state: AppState) => state;

export const isAppActive = createSelector(
  appState,
  (state: AppState) => state.app
)

export const currentBanana = createSelector(
  appState,
  (state: AppState) => state.banana
  )
