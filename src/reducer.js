import { combineReducers } from 'redux';
import charactersReducer from './containers/Characters/reducer';
import episodesReducer from './containers/Episodes/reducer';
import locationReducer from './containers/Locations/reducer';

export const rootReducer = combineReducers({
  characters: charactersReducer,
  episodes: episodesReducer,
  location: locationReducer
});
