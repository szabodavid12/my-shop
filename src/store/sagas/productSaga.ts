import { all, call, put, select, takeLatest } from "redux-saga/effects";
import { getProducts, storeProducts } from "../actions/productAction";
import axios from "axios";
import { PageableProducts, ProductSummary } from "../../types/product";
import { PageableRequest } from "../../types/pageable";
import { selectProductsLength } from "../selectors/productSelector";

const DEFAULT_LIMIT = 10;

function fetchProducts(request: PageableRequest) {
  return axios
    .get<PageableProducts>("https://dummyjson.com/products", {
      params: { limit: DEFAULT_LIMIT, skip: request.skip },
    })
    .then(({ data }) => data.products);
}

function* doGetProducts() {
  const savedProductsLength: number = yield select(selectProductsLength);

  const response: Array<ProductSummary> = yield call(fetchProducts, {
    skip: savedProductsLength,
  });

  yield put(storeProducts(response));
}

export default function* productSaga() {
  yield all([takeLatest(getProducts, doGetProducts)]);
}
