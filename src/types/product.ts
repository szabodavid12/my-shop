import { Pageable } from "./pageable";

export type ProductSummary = {
  id: number;
  title: string;
  thumbnail: string;
  description: string;
  price: string;
  discountPercentage: string;
};

export type PageableProducts = Pageable & {
  products: Array<ProductSummary>;
};
