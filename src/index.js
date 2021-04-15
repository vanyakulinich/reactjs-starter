import React from "react"
import ReactDOM from "react-dom"
import { Helmet } from "react-helmet"
import { ThemeProvider } from "styled-components"
import { mainTheme, GlobalStyles } from "./themes/main.theme"
import App from "./App"

ReactDOM.render(
  <>
    <Helmet>
      <title>{process.env.REACT_APP_TITLE}</title>
      {/* use other global metatags here */}
    </Helmet>
    <React.StrictMode>
      <ThemeProvider theme={mainTheme}>
        <GlobalStyles />
        <App />
      </ThemeProvider>
    </React.StrictMode>
  </>,
  document.getElementById("root")
)
