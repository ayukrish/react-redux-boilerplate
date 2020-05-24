import { takeLatest, put, call } from 'redux-saga/effects';
import { service } from '../../service';
import { enpoints } from '../../endpoint';
import { setLocations } from './actions';
import { GET_LOCATIONS } from './constants';

export function* getLocationsSaga({ data }) {
  try {
    // data is obtained after axios call is resolved
    const response = yield call(service, {
      url: enpoints.locations,
      method: 'get',
      page: data
    });
    yield put(setLocations(response));
  } catch (e) {
    // catch error on a bad axios call
    // alert using an alert library
  }
}

export function* getLocationSaga() {
  yield takeLatest(GET_LOCATIONS, getLocationsSaga);
}
