import {Action, createReducer, on} from '@ngrx/store';
import {
  createBanana,
  updateBananaSize,
  retrieveNewBananaItemFromServer,
  updateBananaSizeWithUserValue, bananaLoadedSuccess, bananaLoadedError, clearBanana
} from './banana.actions';
import {BananaColor, BananaRating, BananaModel} from '../model/banana-model';

export interface State {
  color: BananaColor;
  size: BananaModel;
  rating: BananaRating;
}

export const initialState: any = {

};

const _bananaReducer = createReducer(
  initialState,
  on(createBanana, state => ({...state, color: BananaColor.YELLOW, size: BananaModel.MEDIUM, rating: BananaRating.OK})),
  on(updateBananaSize, state => ({...state, size: BananaModel.BIG})),
  on(updateBananaSizeWithUserValue, (state, payload) => ({...state, size: payload.size})),
  on(retrieveNewBananaItemFromServer, state => state),
  on(bananaLoadedSuccess, (state, payload: State) => ({...state, color: payload.color, size: payload.size, rating: payload.rating })),
  on(bananaLoadedError, (state) => {console.log('Failed to load banana from fake server'); return state; }),
  on(clearBanana, (state) => ({}))
);

export function reducer(state: State | undefined, action: Action) {
  return _bananaReducer(state, action);
}
