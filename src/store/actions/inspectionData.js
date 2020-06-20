import * as actionTypes from "./actionTypes";

export const applyStart = () => {
  return {
    type: actionTypes.APPLY_START,
  };
};

export const applyFail = (error) => {
  return {
    type: actionTypes.APPLY_FAIL,
    error: error,
  };
};

export const applyInspectionData = (applyData, token) => {
  return {
    type: actionTypes.APPLY_DATA,
    applyData: applyData,
    token: token,
  };
};

export const applySuccess = (id, applyData, message) => {
  return {
    type: actionTypes.APPLY_SUCCESS,
    applyId: id,
    applyData: applyData,
    message: message,
  };
};
