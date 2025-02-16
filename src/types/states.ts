import { ProductDetails } from "./product";

export type ProductState = {
  products: Array<ProductDetails>;
  total?: number;
};
