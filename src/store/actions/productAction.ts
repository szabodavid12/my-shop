import { createAction } from "@reduxjs/toolkit";
import { PageableProducts } from "../../types/product";

export const getProducts = createAction<void, string>("GET_PRODUCTS");
export const storeProducts = createAction<PageableProducts, string>(
  "STORE_PRODUCTS"
);
