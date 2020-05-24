import { locationData } from '../selectors';

describe('Characters selectors', () => {
  it('should select charactersData from state', () => {
    const data = {};
    const state = {
      location: {
        data
      }
    };
    expect(locationData(state)).toBe(data);
  });
});
