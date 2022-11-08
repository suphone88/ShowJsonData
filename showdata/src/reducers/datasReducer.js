import {SHOW_JSONDATA} from '../actions/types';

// const showData = () =>{
//     const data = JSON.parse(showData);
//     return data;
// }

export default (state ={}, action) => {
    switch(action.type){
        case SHOW_JSONDATA:
            return {};
            default:
                return state;
    }
};


  