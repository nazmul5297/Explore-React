import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import {
  FirstComponent,
  FirstComponentWithProps,
} from "./mainconcept/componentAndProps";

import FirstClassComponent from "./mainconcept/classComponent/firstClassComponent";

// ReactDOM.render(<FirstComponent />, document.getElementById("root"));

ReactDOM.render(
  // <FirstComponentWithProps timerName="bn-BD" />,
  <FirstClassComponent timerName="bn-BD" />,
  document.getElementById("root")
);
