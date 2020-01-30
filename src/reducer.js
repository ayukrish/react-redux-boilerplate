import { combineReducers } from 'redux';
import inputReducer from './containers/TestComponent/reducer';

export const rootReducer = combineReducers({
  value: inputReducer
});
