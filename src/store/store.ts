import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers/reducer";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./sagas/saga";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleWare) =>
    getDefaultMiddleWare().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
