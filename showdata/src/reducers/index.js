import {combineReducers} from 'redux';
import datasReducer from './datasReducer';

// const showsData = () =>{
//     const data = JSON.parse(showsData);
//     return data;
// }
export default combineReducers({
    datas:datasReducer
});