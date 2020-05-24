import { charactersData } from '../selectors';

describe('Characters selectors', () => {
  it('should select charactersData from state', () => {
    const data = {};
    const state = {
      characters: {
        data
      }
    };
    expect(charactersData(state)).toBe(data);
  });
});
