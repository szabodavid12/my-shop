import { createAction } from "@reduxjs/toolkit";
import { PageableProducts, ProductDetails } from "../../types/product";

export const getProducts = createAction<void, string>("GET_PRODUCTS");
export const getProductById = createAction<number, string>("GET_PRODUCT_BY_ID");
export const storeAllProducts = createAction<PageableProducts, string>(
  "STORE_ALL_PRODUCTS"
);
export const storeProduct = createAction<ProductDetails, string>(
  "STORE_PRODUCT"
);
export const clearProducts = createAction<void, string>("CLEAR_PRODUCTS");
