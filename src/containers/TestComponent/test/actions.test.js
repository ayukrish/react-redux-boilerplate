import { onChange } from '../actions';
import { ON_CHANGE } from '../constants';

describe('actions', () => {
  it('should create an action onChange', () => {
    const data = 'Finish docs';
    const expectedAction = {
      type: ON_CHANGE,
      data,
    };
    expect(onChange(data)).toEqual(expectedAction);
  });
});
