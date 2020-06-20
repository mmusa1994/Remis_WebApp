import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import thunk from "redux-thunk";
import createSagaMiddleware from "redux-saga";

import authReducer from "./reducers/auth";
import applyReducer from "./reducers/inspectionData";
import mailReducer from "./reducers/mail";

import { watchAuth } from "./sagas/index";
import { watchApply } from "./sagas/index";
import { watchMail } from "./sagas/index";

const composeEnhancers =
  process.env.NODE_ENV === "development"
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : null || compose;

const rootReducer = combineReducers({
  auth: authReducer,
  apply: applyReducer,
  mail: mailReducer,
});

const sagaMiddleware = createSagaMiddleware();

let store;

if (
  window.navigator.userAgent.includes("Chrome") ||
  window.navigator.userAgent.includes("Firefox")
) {
  store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk, sagaMiddleware))
  );
} else {
  store = createStore(rootReducer, applyMiddleware(thunk, sagaMiddleware));
}

sagaMiddleware.run(watchAuth);
sagaMiddleware.run(watchApply);
sagaMiddleware.run(watchMail);

export default store;
