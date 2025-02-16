import { RootState } from "../store";

export const selectProducts = (state: RootState) => state.product.products;
export const selectProductsLength = (state: RootState) =>
  state.product.products.length;
export const selectTotalProducts = (state: RootState) => state.product.total;
export const selectProductById = (state: RootState, id: number) =>
  state.product.products.find((product) => product.id === id);
export const dummySelector = () => undefined;
