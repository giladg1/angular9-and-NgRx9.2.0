import {Action, createReducer, on} from '@ngrx/store';
import {
  createBanana,
  updateBananaSize,
  retrieveNewBananaItemFromServer,
  updateBananaSizeWithUserValue, bananaLoadedSuccess, bananaLoadedError
} from './banana.actions'
import {BananaColor, BananaRating, BananaSize} from "../model/banana-size";

export interface State {
  color: BananaColor;
  size: BananaSize;
  rating: BananaRating
}

export const initialState: any = {

}

const _bananaReducer = createReducer(
  initialState,
  on(createBanana, state => ({...state, color: BananaColor.YELLOW, size: BananaSize.MEDIUM, rating: BananaRating.OK})),
  on(updateBananaSize, state => ({...state, size: BananaSize.BIG})),
  on(updateBananaSizeWithUserValue, (state, payload) => ({...state, size: payload.size})),
  on(retrieveNewBananaItemFromServer, state => state),
  on(bananaLoadedSuccess, (state, payload: State) => ({...state, color: payload.color, size: payload.size, rating: payload.rating })),
  on(bananaLoadedError, (state) => {console.log('Failed to load banana from fake server'); return state}),
)

export function reducer(state: State | undefined, action: Action) {
  return _bananaReducer(state, action)
}