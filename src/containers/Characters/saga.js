import { takeLatest, put, call } from 'redux-saga/effects';
import { service } from '../../service';
import { enpoints } from '../../endpoint';
import { setCharacters } from './actions';
import { GET_CHARACTERS } from './constants';


export function* getCharactersSaga({ data }) {
  try {
    // data is obtained after axios call is resolved
    const response = yield call(service, {
      url: enpoints.characters,
      method: 'get',
      page: data
    });
    yield put(setCharacters(response));
  } catch (e) {
    // catch error on a bad axios call
    // alert using an alert library
  }
}

export function* getDataSaga() {
  yield takeLatest(GET_CHARACTERS, getCharactersSaga);
}
