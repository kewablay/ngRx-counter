import { selectCounterState, selectCount } from './counter.selectors';
import { AppState } from '../../app.state';

describe('Counter Selectors', () => {
  const initialCounterState = { count: 10, interval: 2 };

  const mockState: AppState = {
    counter: initialCounterState,
    // other slices of state
  };

  it('should select the counter state', () => {
    const result = selectCounterState(mockState);
    expect(result).toEqual(initialCounterState);
  });

  it('should select the count', () => {
    const result = selectCount.projector(initialCounterState);
    expect(result).toEqual(initialCounterState);
  });
});
