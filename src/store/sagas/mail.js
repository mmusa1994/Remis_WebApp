import { put } from "redux-saga/effects";

import axios from "../../axios-order";
import * as actions from "../actions";

export function* mailDataSaga(action) {
  yield put(actions.mailStart());
  try {
    const response = yield axios.post("/mails.json/ ", action.mailData);
    yield put(
      actions.mailSuccess(response.data.name, action.mailData, {
        message: "Your mail was successful sended ",
      })
    );
  } catch (error) {
    yield put(actions.mailFail(error));
  }
}
