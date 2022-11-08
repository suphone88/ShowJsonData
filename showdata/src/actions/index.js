import jsondata from '../apis/jsondata';
import { FETCH_SHOW } from './types';

export const showJson = () => async dispatch => {
    const response = await jsondata.get('/jsondata'); 
    //console.log('response',response.data)    
    dispatch({ type: FETCH_SHOW, payload: response.data });
};