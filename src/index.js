import React from "react";
import ReactDOM from "react-dom";
import { Helmet } from "react-helmet";
import App from "./app/App";

import "./styles/index.css";

ReactDOM.render(
  <>
    <Helmet>
      <title>Math Calculus App</title>
      {/* fonts for material */}
      <link rel='preconnect' href='https://fonts.googleapis.com' />
      <link
        rel='stylesheet'
        href='https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap'
      />
      <link
        rel='stylesheet'
        href='https://fonts.googleapis.com/icon?family=Material+Icons'
      />
    </Helmet>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </>,
  document.getElementById("root")
);
