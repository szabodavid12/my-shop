import { Pageable } from "./pageable";

export type ProductSummary = {
  id: number;
  title: string;
  thumbnail: string;
  description: string;
  price: number;
  discountPercentage: number;
};

export type PageableProducts = Pageable & {
  products: Array<ProductSummary>;
};

export type ProductDetails = ProductSummary & {
  rating?: number;
  stock?: string;
  brand?: string;
  category?: string;
  images?: Array<string>;
};
