import {combineReducers} from 'redux';
import jsonsReducer from './jsonsReducer';

//console.log('jsonReducer',jsonsReducer)

export default combineReducers({
    jsonsData: jsonsReducer
});