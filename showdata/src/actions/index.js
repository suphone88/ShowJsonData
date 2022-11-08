import jsondata from '../apis/jsondata';
import {SHOW_JSONDATA} from './types';

export const showsData = () => async dispatch => {
    const response = await jsondata.get('/jsondata'); 
    
    dispatch({ type: SHOW_JSONDATA, payload: response.data });
};