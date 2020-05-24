import { episodeData } from '../selectors';

describe('Characters selectors', () => {
  it('should select charactersData from state', () => {
    const data = {};
    const state = {
      episodes: {
        data
      }
    };
    expect(episodeData(state)).toBe(data);
  });
});
