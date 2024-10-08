import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import CustomCursor from "./components/CustomCursor";
import "./styles.css";

ReactDOM.render(
  <>
    <CustomCursor />
    <App />
  </>,
  document.getElementById("root")
);
