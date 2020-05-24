import { takeLatest, put } from 'redux-saga/effects';
import { getEpisodeSaga, getEpisodesSaga } from '../saga';
import { GET_EPISODES } from '../constants';
import { setEpisodes } from '../actions';

describe('getEpisodeSaga', () => {
  const genObject = getEpisodeSaga();

  it('should wait for every GET_EPISODES action and call getEpisodesSaga', () => {
    expect(genObject.next().value)
      .toEqual(takeLatest(GET_EPISODES, getEpisodesSaga));
  });

  it('should be done on next iteration', () => {
    expect(genObject.next().done).toBeTruthy();
  });
});

describe('getEpisodesSaga', () => {
  it('should call api and dispatch success action', async () => {
    const response = {};
    const saga = getEpisodesSaga({ data: {} });
    saga.next();
    expect(saga.next(response).value)
      .toEqual(put(setEpisodes(response)));
  });
});
