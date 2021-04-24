import { actionCreator } from "../actionCreator"
import { errorSelector } from "../selectors"

// action types
const SET_ERROR = "SET_ERROR"
const RESET_ERROR = "RESET_ERROR"

const initState = {
  isError: false,
  toastMsgName: "",
}

// reducer
export const errorReducer = (state = initState, action = {}) => {
  switch (action.type) {
    case SET_ERROR:
      return { ...state, isError: true, toastMsgName: action.payload }
    case RESET_ERROR:
      return { ...state, isError: false, toastMsgName: "" }
    default:
      return state
  }
}

// actions
export const putError = (payload) => actionCreator(SET_ERROR, payload)
export const resetError = () => actionCreator(RESET_ERROR)

export const setError = (payload) => (dispatch, getState) => {
  const { isError } = errorSelector(getState())
  if (!isError) dispatch(putError(payload))
}
