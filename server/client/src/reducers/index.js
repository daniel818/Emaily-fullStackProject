/**
 * Created by Daniel on 26/11/2017.
 */
import { combineReducers } from "redux";
import authReducer from "./authReducer";

export default combineReducers({
  auth: authReducer
});
