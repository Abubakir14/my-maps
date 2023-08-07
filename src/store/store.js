import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import rootReducer from "../reducers/Reducers";
import watchFetchRoute from "../sagas/sagas";

const sagaMiddleware = createSagaMiddleware();

// Настройка Redux store
const store = configureStore({
  reducer: rootReducer,
  middleware: [sagaMiddleware],
});

// Запускаем все саги
sagaMiddleware.run(watchFetchRoute);

export default store;
