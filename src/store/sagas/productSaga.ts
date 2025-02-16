import { all, call, takeLatest } from "redux-saga/effects";
import { getProducts } from "../actions/productAction";
import axios from "axios";

function fetchProducts() {
  return axios
    .get<any>("https://dummyjson.com/products")
    .then(({ data }) => data);
}

function* doGetProducts() {
  const resp: string = yield call(fetchProducts);
  console.log("asd", resp);

  console.log("myFirstCall");
}

export default function* productSaga() {
  yield all([takeLatest(getProducts, doGetProducts)]);
}
