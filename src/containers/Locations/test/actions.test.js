import configureStore from 'redux-mock-store';
import { getLocations, setLocations } from '../actions';
import { GET_LOCATIONS, SET_LOCATIONS } from '../constants';

const mockStore = configureStore();
const store = mockStore();

describe('Characters', () => {
  beforeEach(() => {
    // Runs before each test in the suite
    store.clearActions();
  });

  it('Dispatches the correct getLocations action', () => {
    const expectedActions = [{ type: GET_LOCATIONS, data: 1 }];

    store.dispatch(getLocations(1));
    expect(store.getActions()).toEqual(expectedActions);
  });

  it('Dispatches the  setLocations action', () => {
    const expectedActions = [{ type: SET_LOCATIONS, data: {} }];

    store.dispatch(setLocations({}));
    expect(store.getActions()).toEqual(expectedActions);
  });
});
