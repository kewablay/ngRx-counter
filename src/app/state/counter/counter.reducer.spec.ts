import { counterReducer, CounterState, initialState } from './counter.reducer';
import { increment, decrement, reset, setCountInterval } from './counter.actions';

describe('Counter Reducer', () => {
  it('should return the initial state', () => {
    const state = counterReducer(undefined, { type: '@@INIT' });
    expect(state).toEqual(initialState);
  });

  it('should increment the count', () => {
    const state = counterReducer(initialState, increment());
    expect(state.count).toBe(initialState.count + initialState.interval);
  });

  it('should decrement the count, but not below 0', () => {
    const stateWithPositiveCount: CounterState = { ...initialState, count: 5 };
    const state = counterReducer(stateWithPositiveCount, decrement());
    expect(state.count).toBe(5 - stateWithPositiveCount.interval);

    const stateAtZero: CounterState = { ...initialState, count: 0 };
    const stateZero = counterReducer(stateAtZero, decrement());
    expect(stateZero.count).toBe(0); // Should not go below 0
  });

  it('should reset the count and interval', () => {
    const state = counterReducer(initialState, reset());
    expect(state.count).toBe(0);
    expect(state.interval).toBe(1);
  });

  it('should set a new count interval', () => {
    const newInterval = 5;
    const state = counterReducer(initialState, setCountInterval({ interval: newInterval }));
    expect(state.interval).toBe(newInterval);
  });
});
