import { increment, decrement, reset, setCountInterval } from './counter.actions';

describe('Counter Actions', () => {
  it('should create an increment action', () => {
    const action = increment();
    expect(action.type).toBe('[Counter Component] Increment');
  });

  it('should create a decrement action', () => {
    const action = decrement();
    expect(action.type).toBe('[Counter Component] Decrement');
  });

  it('should create a reset action', () => {
    const action = reset();
    expect(action.type).toBe('[Counter Component] Reset');
  });

  it('should create a setCountInterval action with an interval', () => {
    const interval = 5;
    const action = setCountInterval({ interval });
    expect(action.type).toBe('[Counter Component] setCountInterval');
    expect(action.interval).toBe(interval);
  });
});
