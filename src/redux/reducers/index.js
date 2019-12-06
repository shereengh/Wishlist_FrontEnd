import { combineReducers } from "redux";

// Reducers
import listReducer from "./items";
import authReducer from "./auth";

export default combineReducers({
  rootList: listReducer,
  rootAuth: authReducer
});
