import {combineReducers} from 'redux';
import jsonsReducer from './jsonsReducer';



export default combineReducers({
    jsonsData: jsonsReducer
});