import { GET_EPISODES, SET_EPISODES } from './constants';


export const getEpisodes = pageNo => ({ type: GET_EPISODES, data: pageNo });

export const setEpisodes = data => ({ type: SET_EPISODES, data });
