import { createReducer } from "@reduxjs/toolkit";
import { INITIAL_PRODUCT_STATE } from "../../constants/States";
import { storeProducts } from "../actions/productAction";

export const productReducer = createReducer(
  INITIAL_PRODUCT_STATE,
  (builder) => {
    builder.addCase(storeProducts, (state, action) => {
      state.products.push(...action.payload.products);
      state.total = action.payload.total;
    });
  }
);
