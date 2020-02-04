import reducer from '../reducer';
import { ON_CHANGE } from '../constants';

const state = {
  data: ''
};

describe('todos reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(state);
  });

  it('should handle ADD_TODO', () => {
    const data = 'test';
    expect(
      reducer(state, {
        type: ON_CHANGE,
        data
      }),
    ).toEqual({ data });
  });
});
