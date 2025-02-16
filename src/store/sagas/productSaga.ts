import { all, call, put, select, takeLatest } from "redux-saga/effects";
import {
  getProductById,
  getProducts,
  storeAllProducts,
  storeProduct,
} from "../actions/productAction";
import axios from "axios";
import { PageableProducts, ProductDetails } from "../../types/product";
import { PageableRequest } from "../../types/pageable";
import { selectProductsLength } from "../selectors/productSelector";
import { PayloadAction } from "@reduxjs/toolkit";

const DEFAULT_LIMIT = 10;

function fetchProducts(request: PageableRequest) {
  return axios
    .get<PageableProducts>("https://dummyjson.com/products", {
      params: { limit: DEFAULT_LIMIT, skip: request.skip },
    })
    .then(({ data }) => data);
}

function* doGetProducts() {
  const savedProductsLength: number = yield select(selectProductsLength);

  const response: PageableProducts = yield call(fetchProducts, {
    skip: savedProductsLength,
  });

  yield put(storeAllProducts(response));
}

function fetchProductById(id: number) {
  return axios
    .get<ProductDetails>(`https://dummyjson.com/products/${id}`)
    .then(({ data }) => data);
}

function* doGetProductById(action: PayloadAction<number>) {
  const response: ProductDetails = yield call(fetchProductById, action.payload);

  yield put(storeProduct(response));
}

export default function* productSaga() {
  yield all([
    takeLatest(getProducts, doGetProducts),
    takeLatest(getProductById, doGetProductById),
  ]);
}
