import { combineReducers } from "@reduxjs/toolkit";
import { itemReducer } from "./itemReducer";

const rootReducer = combineReducers({
  item: itemReducer,
});

export default rootReducer;
