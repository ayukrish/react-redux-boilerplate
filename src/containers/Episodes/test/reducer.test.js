import { SET_EPISODES } from '../constants';
import reducer from '../reducer';

const state = {
  data: {}
};

describe('Episodes reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({ ...state });
  });

  it('should handle SET_EPISODES', () => {
    expect(
      reducer([], {
        type: SET_EPISODES,
        data: {}
      })
    ).toEqual({
      ...state,
      data: {}
    });
  });
});
