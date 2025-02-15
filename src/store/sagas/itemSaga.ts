import { all, takeLatest } from "redux-saga/effects";
import { myFirstAction } from "../actions/itemAction";

function* myFirstCall() {
  console.log("myFirstCall");
}

export default function* itemSaga() {
  yield all([takeLatest(myFirstAction, myFirstCall)]);
}
