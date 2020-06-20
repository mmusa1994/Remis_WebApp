import * as actionTypes from "./actionTypes";

export const mailStart = () => {
  return {
    type: actionTypes.MAIL_START,
  };
};

export const mailFail = (error) => {
  return {
    type: actionTypes.MAIL_FAIL,
    error: error,
  };
};

export const mailData = (mailData, token) => {
  return {
    type: actionTypes.MAIL_DATA,
    mailData: mailData,
    token: token,
  };
};

export const mailSuccess = (id, mailData, message) => {
  return {
    type: actionTypes.MAIL_SUCCESS,
    mailId: id,
    mailData: mailData,
    message: message,
  };
};
