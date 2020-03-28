import { combineReducers } from "redux";
import todos from "./todos";
import visibleFilter from "./visibleFilter";

const rootReducer = combineReducers({ todos, visibleFilter });

export default rootReducer;
