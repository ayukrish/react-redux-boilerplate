import { takeLatest, put } from 'redux-saga/effects';
import { getDataSaga, getCharactersSaga } from '../saga';
import { GET_CHARACTERS } from '../constants';
import { setCharacters } from '../actions';

describe('getDataSaga', () => {
  const genObject = getDataSaga();

  it('should wait for every GET_CHARACTERS action and call getCharactersSaga', () => {
    expect(genObject.next().value).toEqual(
      takeLatest(GET_CHARACTERS, getCharactersSaga)
    );
  });

  it('should be done on next iteration', () => {
    expect(genObject.next().done).toBeTruthy();
  });
});

describe('getCharactersSaga', () => {
  it('should call api and dispatch success action', async () => {
    const response = {};
    const saga = getCharactersSaga({ data: {} });
    saga.next();
    expect(saga.next(response).value).toEqual(put(setCharacters(response)));
  });
});
