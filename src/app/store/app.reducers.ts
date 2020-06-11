import {ActionReducerMap} from '@ngrx/store';
import * as fromApp from './app.reducer';
import * as fromBanana from '../banana/store/banana.reducer';

// Here we will add all the reducers from different parts of the app

export interface AppState {
  app: fromApp.State,
  banana: fromBanana.State
}

export const combinedReducers: ActionReducerMap<AppState> = {
  app: fromApp.reducer,
  banana: fromBanana.reducer
};
