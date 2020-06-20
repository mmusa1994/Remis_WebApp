import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../../shared/utility";

const initialState = {
  mails: [],
  loading: false,
  purchased: false,
  message: null,
};

const mailStart = (state, action) => {
  return updateObject(state, { loading: true });
};

const mailSuccess = (state, action) => {
  const newmail = updateObject(action.mailData, { id: action.mailId });
  return updateObject(state, {
    loading: false,
    purchased: true,
    mails: state.mails.concat(newmail),
    message: action.message,
  });
};

const mailFail = (state, action) => {
  return updateObject(state, { loading: false });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.MAIL_START:
      return mailStart(state, action);
    case actionTypes.MAIL_SUCCESS:
      return mailSuccess(state, action);
    case actionTypes.MAIL_FAIL:
      return mailFail(state, action);
    default:
      return state;
  }
};

export default reducer;
