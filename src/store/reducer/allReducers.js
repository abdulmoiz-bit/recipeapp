import counterReducer from "./index";
import {combineReducers} from "react-redux";


const allReducers= combineReducers({
    counterReducer,
})

export default allReducers;