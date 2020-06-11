import {createReducer} from "@ngrx/store";

export interface State {
  isAppActive: boolean;
}

const initialState: State = {
  isAppActive: true
};

const _AppReducer = createReducer(
  initialState,
)

export function reducer(state: State | undefined, action) {
  return _AppReducer(state, action)
}
