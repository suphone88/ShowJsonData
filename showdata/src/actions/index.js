import jsondata from '../apis/jsondata';
import { FETCH_SHOW } from './types';


export const fetchshows = () => async dispatch => {
     const response = await jsondata.get('/jsondata');    
     //console.log('response',response)    
     dispatch({ type: FETCH_SHOW, payload: response.data });
};

