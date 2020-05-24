import { SET_CHARACTERS } from '../constants';
import reducer from '../reducer';

const state = {
  data: {}
};

describe('Characters reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({ ...state });
  });

  it('should handle SET_CHARACTERS', () => {
    expect(
      reducer([], {
        type: SET_CHARACTERS,
        data: {}
      })
    ).toEqual({
      ...state,
      data: {}
    });
  });
});
