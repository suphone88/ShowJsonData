import { combineReducers } from "redux";
import jsonsReducer from "./jsonsReducer";

//export default () => console.log("Hello World.");
export default combineReducers({
  jsonsData: jsonsReducer,
});
