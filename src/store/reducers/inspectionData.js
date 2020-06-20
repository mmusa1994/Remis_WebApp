import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../../shared/utility";

const initialState = {
  applys: [],
  loading: false,
  purchased: false,
  message: null,
};

const applyStart = (state, action) => {
  return updateObject(state, { loading: true });
};

const applySuccess = (state, action) => {
  const newApply = updateObject(action.applyData, { id: action.applyId });
  return updateObject(state, {
    loading: false,
    purchased: true,
    applys: state.applys.concat(newApply),
    message: action.message,
  });
};

const applyFail = (state, action) => {
  return updateObject(state, { loading: false });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.APPLY_START:
      return applyStart(state, action);
    case actionTypes.APPLY_SUCCESS:
      return applySuccess(state, action);
    case actionTypes.APPLY_FAIL:
      return applyFail(state, action);
    default:
      return state;
  }
};

export default reducer;
