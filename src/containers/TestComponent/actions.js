import { ON_CHANGE } from './constants';


export const onChange = (data) => (
  {
    type: ON_CHANGE,
    data
  }
);
