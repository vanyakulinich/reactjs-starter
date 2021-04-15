import React from "react"
import ReactDOM from "react-dom"
import { Helmet } from "react-helmet"
import { ThemeProvider } from "styled-components"
import { Provider as ReduxProvider } from "react-redux"
import { mainTheme, GlobalStyles } from "./themes/main.theme"
import App from "./App"
import { store } from "./redux"

import "./localization/i18n"

ReactDOM.render(
  <>
    <Helmet>
      <title>{process.env.REACT_APP_TITLE}</title>
      {/* use other global metatags here */}
    </Helmet>
    <React.StrictMode>
      <ReduxProvider store={store}>
        <ThemeProvider theme={mainTheme}>
          <GlobalStyles />
          <App />
        </ThemeProvider>
      </ReduxProvider>
    </React.StrictMode>
  </>,
  document.getElementById("root")
)
