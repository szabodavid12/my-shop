import { createReducer } from "@reduxjs/toolkit";
import { INITIAL_PRODUCT_STATE } from "../../constants/States";

export const productReducer = createReducer(
  INITIAL_PRODUCT_STATE,
  (builder) => {
    // builder.addCase(myFirstAction, (state) => {
    //   state.name = "lolasd";
    // });
  }
);
