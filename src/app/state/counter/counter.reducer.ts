import { createReducer, on } from '@ngrx/store';
import { decrement, increment, reset, setCountInterval } from './counter.actions';

export interface CounterState {
  count: number;
  interval: number;
}

export const initialState = JSON.parse(localStorage.getItem('counter') ?? JSON.stringify({count : 0, interval: 1}));
// export const initialState: CounterState = {count : 0, interval: 1};

export const counterReducer = createReducer(
  initialState,
  on(increment, (state: CounterState) => ({ ...state, count: state.count + state.interval })),
  on(decrement, (state:CounterState) => ({ ...state, count: state.count > 0 ? state.count - state.interval : state.count })),
  on(setCountInterval, (state:CounterState, { interval }) => ({ ...state, interval })),
  on(reset, (state:CounterState) => ({ ...state, count: 0, interval: 1 })),
);
