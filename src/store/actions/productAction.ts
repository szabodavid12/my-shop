import { createAction } from "@reduxjs/toolkit";
import { ProductSummary } from "../../types/product";

export const getProducts = createAction<void, string>("GET_PRODUCTS");
export const storeProducts = createAction<Array<ProductSummary>, string>(
  "STORE_PRODUCTS"
);
