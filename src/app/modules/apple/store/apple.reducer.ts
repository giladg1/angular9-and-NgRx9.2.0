import {Action, createReducer, on} from '@ngrx/store';
import {AppleColor, AppleRating, AppleSize} from "../model/apple-model";
import {createApple, removeApple} from "./apple.actions";

export interface State {
  color: AppleColor;
  size: AppleSize;
  rating: AppleRating
}

export const initialState: any = {

}

const _appleReducer = createReducer(
  initialState,
  on(createApple, state => ({...state, color: AppleColor.GREEN, size: AppleSize.BIG, rating: AppleRating.EXCELLENT})),
  on(removeApple, state => ({})),
)

export function reducer(state: State | undefined, action: Action) {
  return _appleReducer(state, action)
}
