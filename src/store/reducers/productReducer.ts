import { createReducer } from "@reduxjs/toolkit";
import { INITIAL_PRODUCT_STATE } from "../../constants/States";
import {
  clearProducts,
  storeAllProducts,
  storeProduct,
} from "../actions/productAction";

const DOES_NOT_EXIST_INDEX = -1;

export const productReducer = createReducer(
  INITIAL_PRODUCT_STATE,
  (builder) => {
    builder.addCase(storeAllProducts, (state, action) => {
      state.products.push(...action.payload.products);
      state.total = action.payload.total;
    });

    builder.addCase(storeProduct, (state, action) => {
      const index = state.products.findIndex(
        (product) => product.id === action.payload.id
      );

      if (index === DOES_NOT_EXIST_INDEX) {
        state.products.push(action.payload);
      } else {
        state.products[index] = action.payload;
      }
    });

    builder.addCase(clearProducts, (state) => {
      state.products = [];
    });
  }
);
