import { combineReducers } from "redux";
import requestReducer from "./requestReducer";

const reducers = combineReducers({
    request: requestReducer
})