import { put } from "redux-saga/effects";

import axios from "../../axios-order";
import * as actions from "../actions";

export function* applyInspectionDataSaga(action) {
  yield put(actions.applyStart());
  try {
    const response = yield axios.post(
      "/applys.json?auth=" + action.token,
      action.applyData
    );
    yield put(
      actions.applySuccess(response.data.name, action.applyData, {
        message: "Your apply was successful ",
      })
    );
  } catch (error) {
    yield put(actions.applyFail(error));
  }
}
