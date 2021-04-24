import React, { Suspense } from "react"
import ReactDOM from "react-dom"
import { Helmet } from "react-helmet"
import { ThemeProvider } from "styled-components"
import { Provider as ReduxProvider } from "react-redux"
import { ToastContainer } from "react-toastify"

import { mainTheme, GlobalStyles } from "./themes/main.theme"
import App from "./App"
import LoadingSpinner from "./components/common/spinners/LoadingSpinner"
import { store } from "./redux"

import "./localization/i18n"
import "react-toastify/dist/ReactToastify.css"

ReactDOM.render(
  <>
    <Helmet>
      <title>{process.env.REACT_APP_TITLE}</title>
      {/* use other global metatags here */}
    </Helmet>
    <React.StrictMode>
      <Suspense fallback={<LoadingSpinner />}>
        {/* toasted messages  */}
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnVisibilityChange
          draggable
          pauseOnHover
        />

        <ReduxProvider store={store}>
          <ThemeProvider theme={mainTheme}>
            <GlobalStyles />
            <App />
          </ThemeProvider>
        </ReduxProvider>
      </Suspense>
    </React.StrictMode>
  </>,
  document.getElementById("root")
)
