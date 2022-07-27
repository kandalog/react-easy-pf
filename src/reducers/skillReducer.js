import { requestStates } from "../constants.js";

export const actionTypes = {
  initial: "INITIAL",
  fetch: "FETCHING",
  success: "FETCH_SUCCESS",
  error: "FETCH_ERROR",
};

// reducerの初期値
// 言語一覧と、4つの状態のうちどれなのか
export const initialState = {
  languageList: [],
  requestState: requestStates.idle,
};

// reducer関数 (更新関数)
export const skillReducer = (state, action) => {
  switch (action.type) {
    case actionTypes.initial: {
      return {
        languageList: [],
        requestState: requestStates.initial,
      };
    }
    case actionTypes.fetch: {
      return {
        ...state,
        requestState: requestStates.loading,
      };
    }
    case actionTypes.success: {
      return {
        languageList: action.payload.languageList,
        requestState: requestStates.success,
      };
    }
    case actionTypes.error: {
      return {
        languageList: [],
        requestState: requestStates.error,
      };
    }
    default: {
      throw new Error();
    }
  }
};
