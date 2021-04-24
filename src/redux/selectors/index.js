/**
 * Redux store selectors
 *
 * Can be used with react-redux useSelector hook
 */

// example selector
export const exampleValueSelector = (store) => store.example.exampleValue

// error selectors
export const errorSelector = (state) => state.error
export const isErrorSelector = (state) => state.error.isError
export const errorMsgNameSelector = (state) => state.error.toastMsgName
