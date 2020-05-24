import { GET_LOCATIONS, SET_LOCATIONS } from './constants';


export const getLocations = (pageNo) => ({ type: GET_LOCATIONS, data: pageNo });

export const setLocations = data => ({ type: SET_LOCATIONS, data });
