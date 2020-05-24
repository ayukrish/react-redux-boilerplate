import { all } from 'redux-saga/effects';
import { getLocationSaga } from './containers/Locations/saga';
import { getEpisodeSaga } from './containers/Episodes/saga';
import { getDataSaga } from './containers/Characters/saga';

export default function* rootSaga() {
  yield all([
    getLocationSaga(),
    getEpisodeSaga(),
    getDataSaga()
    // add other watchers to the array
  ]);
}
