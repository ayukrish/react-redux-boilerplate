import { GET_CHARACTERS, SET_CHARACTERS } from './constants';


export const getCharacters = pageNo => ({ type: GET_CHARACTERS, data: pageNo });

export const setCharacters = data => ({ type: SET_CHARACTERS, data });
