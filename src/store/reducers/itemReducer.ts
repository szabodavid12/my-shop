import { createReducer } from "@reduxjs/toolkit";
import { INITIAL_ITEM_STATE } from "../../constants/States";
import { myFirstAction } from "../actions/itemAction";

export const itemReducer = createReducer(INITIAL_ITEM_STATE, (builder) => {
  builder.addCase(myFirstAction, (state) => {
    state.name = "lolasd";
  });
});
