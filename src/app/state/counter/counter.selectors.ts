import { createSelector } from '@ngrx/store';
import { AppState } from '../../app.state';
import { CounterState } from './counter.reducer';

export const selectCounterState = (state: AppState) => state.counter;

export const selectCount = createSelector(
  selectCounterState,
  (state: CounterState) => state
);
