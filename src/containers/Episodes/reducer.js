import { SET_EPISODES } from './constants';

const INITIAL_STATE = {
  data: {}
};

/**
 * Reducer - to update services state
 * @param {Object} state initial/default services state.
 */
export default function (state = INITIAL_STATE, { type, data }) {
  switch (type) {
    case SET_EPISODES:
      return { ...state, data };
    default:
      return state;
  }
}
