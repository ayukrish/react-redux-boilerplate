import configureStore from 'redux-mock-store';
import { getCharacters, setCharacters } from '../actions';
import { GET_CHARACTERS, SET_CHARACTERS } from '../constants';

const mockStore = configureStore();
const store = mockStore();

describe('Characters', () => {
  beforeEach(() => { // Runs before each test in the suite
    store.clearActions();
  });

  it('Dispatches the correct getCharacters action', () => {
    const expectedActions = [
      { type: GET_CHARACTERS, data: 1 }
    ];

    store.dispatch(getCharacters(1));
    expect(store.getActions()).toEqual(expectedActions);
  });

  it('Dispatches the  setCharacters action', () => {
    const expectedActions = [
      { type: SET_CHARACTERS, data: {} }
    ];

    store.dispatch(setCharacters({}));
    expect(store.getActions()).toEqual(expectedActions);
  });
});
