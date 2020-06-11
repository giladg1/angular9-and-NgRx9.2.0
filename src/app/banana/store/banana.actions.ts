import {createAction, props, union} from '@ngrx/store'
import {BananaModel} from "../model/banana-model";
import {State} from "./banana.reducer";

export const createBanana = createAction('[Banana Item] Create Banana');
export const updateBananaSize = createAction('[Banana Item] Update Banana Size');
export const updateBananaSizeWithUserValue = createAction('[Banana Item] Update Banana Size With Value', props<{ size: BananaModel }>());
export const retrieveNewBananaItemFromServer = createAction('[Banana Item] Retrieve New Banana From Server');
export const bananaLoadedSuccess = createAction('[Banana Item] Banana Loaded Success', props<State>());
export const bananaLoadedError = createAction('[Banana Item] Banana Loaded Error');

const actions = union({
  createBanana,
  updateBananaSize,
  updateBananaSizeWithUserValue,
  retrieveNewBananaItemFromServer,
  bananaLoadedSuccess,
  bananaLoadedError
});

export type BananaActions = typeof actions;
