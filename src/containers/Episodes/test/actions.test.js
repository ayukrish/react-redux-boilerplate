import configureStore from 'redux-mock-store';
import { getEpisodes, setEpisodes } from '../actions';
import { GET_EPISODES, SET_EPISODES } from '../constants';

const mockStore = configureStore();
const store = mockStore();

describe('Characters', () => {
  beforeEach(() => {
    // Runs before each test in the suite
    store.clearActions();
  });

  it('Dispatches the correct getEpisodes action', () => {
    const expectedActions = [{ type: GET_EPISODES, data: 1 }];

    store.dispatch(getEpisodes(1));
    expect(store.getActions()).toEqual(expectedActions);
  });

  it('Dispatches the  setEpisodes action', () => {
    const expectedActions = [{ type: SET_EPISODES, data: {} }];

    store.dispatch(setEpisodes({}));
    expect(store.getActions()).toEqual(expectedActions);
  });
});
