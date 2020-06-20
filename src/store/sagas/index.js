import { takeEvery, all } from "redux-saga/effects";

import * as actionTypes from "../actions/actionTypes";
import {
  logoutSaga,
  checkAuthTimeoutSaga,
  authUserSaga,
  authCheckStateSaga,
} from "./auth";

import { applyInspectionDataSaga } from "./inspectionData";
import { mailDataSaga } from "./mail";

export function* watchAuth() {
  yield all([
    takeEvery(actionTypes.AUTH_CHECK_TIMEOUT, checkAuthTimeoutSaga),
    takeEvery(actionTypes.AUTH_INITIATE_LOGOUT, logoutSaga),
    takeEvery(actionTypes.AUTH_USER, authUserSaga),
    takeEvery(actionTypes.AUTH_CHECK_STATE, authCheckStateSaga),
  ]);
}

export function* watchApply() {
  yield all([takeEvery(actionTypes.APPLY_DATA, applyInspectionDataSaga)]);
}

export function* watchMail() {
  yield all([takeEvery(actionTypes.MAIL_DATA, mailDataSaga)]);
}
