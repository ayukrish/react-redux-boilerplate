import { takeLatest, put } from 'redux-saga/effects';
import { getLocationSaga, getLocationsSaga } from '../saga';
import { GET_LOCATIONS } from '../constants';
import { setLocations } from '../actions';

describe('getLocationSaga', () => {
  const genObject = getLocationSaga();

  it('should wait for every GET_LOCATIONS action and call getLocationsSaga', () => {
    expect(genObject.next().value).toEqual(
      takeLatest(GET_LOCATIONS, getLocationsSaga)
    );
  });

  it('should be done on next iteration', () => {
    expect(genObject.next().done).toBeTruthy();
  });
});

describe('getLocationsSaga', () => {
  it('should call api and dispatch success action', async () => {
    const response = {};
    const saga = getLocationsSaga({ data: {} });
    saga.next();
    expect(saga.next(response).value).toEqual(put(setLocations(response)));
  });
});
