import React from "react"
import ReactDOM from "react-dom"
import { Helmet } from "react-helmet"
import App from "./App"

import "./styles/index.css"
ReactDOM.render(
  <>
    <Helmet>
      <title>{process.env.REACT_APP_TITLE}</title>
      {/* use other global metatags here */}
    </Helmet>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </>,
  document.getElementById("root")
)
