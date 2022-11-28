import _ from "lodash";
import { FETCH_SHOW } from "../actions/types";

//export default () => console.log("Hello World.");

export default (state = {}, action) => {
  //console.log('1.action>>>',action)
  //console.log('1.state>>>>',state)
  switch (action.type) {
    case FETCH_SHOW:
      //console.log('2action>>>',action)
      //console.log('2state>>>>',state)
      return { ...state, ..._.mapKeys(action.payload, "id") };
    //state=({...state,...action.payload });
    //return state;
    default:
      return state;
  }
};
