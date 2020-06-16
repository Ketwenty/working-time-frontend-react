import React from "react";
import ReactDOM from "react-dom";
import { HashRouter } from "react-router-dom";
import Root from "./components/Root";

ReactDOM.render(
  <HashRouter>
    <Root />
  </HashRouter>,
  document.getElementById("root")
);
