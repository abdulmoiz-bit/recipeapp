import { createStore } from "react-redux";
import allReducers from "./reducer/allReducers"

const store = createStore(allReducers)

export default store;