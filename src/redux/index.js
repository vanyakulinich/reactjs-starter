import { createStore, applyMiddleware, compose, combineReducers } from "redux"
import thunk from "redux-thunk"
import reduxMulti from "redux-multi"
import { composeWithDevTools } from "redux-devtools-extension"
import { exampleReducer } from "./ducks/example.ducks"
import { errorReducer } from "./ducks/errors.ducks"

const reducers = combineReducers({
  // add more reducers here
  example: exampleReducer,
  error: errorReducer,
})

const composeEnhancers = process.env.NODE_ENV === "development" ? composeWithDevTools : compose

export const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk, reduxMulti)))
