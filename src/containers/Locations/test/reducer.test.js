import { SET_LOCATIONS } from '../constants';
import reducer from '../reducer';

const state = {
  data: {}
};

describe('Locations reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({ ...state });
  });

  it('should handle SET_LOCATIONS', () => {
    expect(
      reducer([], {
        type: SET_LOCATIONS,
        data: {}
      })
    ).toEqual({
      ...state,
      data: {}
    });
  });
});
