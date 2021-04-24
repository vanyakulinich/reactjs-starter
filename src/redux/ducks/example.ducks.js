/**
 * This is an example of redux "ducks" approach
 */
import { actionCreator } from "../actionCreator"
import httpService from "../../services/http.service"
import { setError } from "./errors.ducks"

// action types
const SET_EXAMPLE_VALUE = "SET_EXAMPLE_VALUE"

// init store
const initStore = {
  exampleValue: "test",
}

// example reducer
export const exampleReducer = (store = initStore, action = {}) => {
  switch (action.type) {
    case SET_EXAMPLE_VALUE:
      return { ...store, exampleValue: action.payload }
    default:
      return store
  }
}

// sync actions
export const setExampleValue = (payload) => actionCreator(SET_EXAMPLE_VALUE, payload)

// async actions
export const exampleAsync = () => async (dispatch, getState) => {
  // do smth async
  try {
    const testData = await httpService.getTestData()
  } catch (err) {
    // handle api error, e.g. dispatch some action for centralized errors in store
    dispatch(setError("exampleError"))
  } finally {
    dispatch(setExampleValue("new test value"))
  }
}
