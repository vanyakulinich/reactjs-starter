import { createStore, applyMiddleware, compose, combineReducers } from "redux"
import thunk from "redux-thunk"
import reduxMulti from "redux-multi"
import { composeWithDevTools } from "redux-devtools-extension"
import { exampleReducer } from "./ducks/exampleDucks"

const reducers = combineReducers({
  // add more reducers here
  example: exampleReducer,
})

const composeEnhancers = process.env.NODE_ENV === "development" ? composeWithDevTools : compose

export const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk, reduxMulti)))
