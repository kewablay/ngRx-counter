import { createReducer, on } from '@ngrx/store';
import { decrement, increment, reset } from './counter.actions';

export interface CounterState {
  count: number;
  interval: number;
}

export const initialState = JSON.parse(localStorage.getItem('counter') ?? '{count : 0, interval: 1}');
// export const initialState: CounterState = {count : 0, interval: 1};

export const counterReducer = createReducer(
  initialState,
  on(increment, (state: CounterState) => ({ ...state, count: state.count + 1 })),
  on(decrement, (state:CounterState) => ({ ...state, count: state.count > 0 ? state.count - 1 : state.count })),
  on(reset, (state:CounterState) => ({ ...state, count: 0 })),
);
