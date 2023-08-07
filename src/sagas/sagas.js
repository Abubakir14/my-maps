// sagas.js
import { put, takeLatest, call, all } from "redux-saga/effects";
import { selectRoute } from "../reducers/Reducers";
import fetchRoutePolyline from "../helpers/helpers"; // Импортируем функцию из файла api.js

// Определяем вашу сагу
// Определяем вашу сагу
function* handleSelectRoute(action) {
  try {
    const selectedRoute = action.payload;
    const startPoint = selectedRoute.startPoint;
    const endPoint = selectedRoute.endPoint;

    const routeData = yield call(fetchRoutePolyline, startPoint, endPoint);
    yield put({ type: "UPDATE_ROUTE_POLYLINE", payload: routeData });
  } catch (error) {
    console.error("Error fetching route:", error);
    yield put({ type: "ROUTE_FETCH_ERROR", payload: error.message });
  }
}


// Определяем сагу-наблюдателя для события SELECT_ROUTE
function* watchSelectRoute() {
  yield takeLatest(selectRoute.type, handleSelectRoute);
}

// Экспортируем все саги
export default function* rootSaga() {
  yield all([watchSelectRoute()]);
}
