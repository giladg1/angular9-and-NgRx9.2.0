import { createFeatureSelector, createSelector } from '@ngrx/store';
import { State } from './apple.reducer';

export const getAppleState = createFeatureSelector<State>('apple');

export const currentApple = createSelector(
  getAppleState,
  (state: State) => state
)
