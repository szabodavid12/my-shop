import { RootState } from "../store";

export const selectProducts = (state: RootState) => state.product.products;
export const selectProductsLength = (state: RootState) =>
  state.product.products.length;
export const selectTotalProducts = (state: RootState) => state.product.total;
