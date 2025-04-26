import { combineReducers } from "redux";
import requestReducer from "./requestReducer.js";

const reducers = combineReducers({
    request: requestReducer
})

export default reducers