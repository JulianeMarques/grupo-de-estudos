import { combineReducers } from "redux";
import user from "./userReducer";
import todo from "./todoReducer"

const rootReducer = combineReducers({user, todo})

export default rootReducer;
