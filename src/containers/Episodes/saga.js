import { takeLatest, put, call } from 'redux-saga/effects';
import { service } from '../../service';
import { enpoints } from '../../endpoint';
import { setEpisodes } from './actions';
import { GET_EPISODES } from './constants';

export function* getEpisodesSaga({ data }) {
  try {
    // data is obtained after axios call is resolved
    const response = yield call(service, {
      url: enpoints.episodes,
      method: 'get',
      page: data
    });
    yield put(setEpisodes(response));
  } catch (e) {
    // catch error on a bad axios call
    // alert using an alert library
  }
}

export function* getEpisodeSaga() {
  yield takeLatest(GET_EPISODES, getEpisodesSaga);
}
