import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
// import {BrowserRouter } from "react-router-dom";

import "assets/scss/material-kit-react.scss?v=1.10.0";

// pages for this product

import App from "./App";
var hist = createBrowserHistory();

ReactDOM.render(<App />, document.getElementById("root"));

reportWebVitals();
