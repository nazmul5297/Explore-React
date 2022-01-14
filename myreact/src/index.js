import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import {
  FirstComponent,
  FirstComponentWithProps,
} from "./mainconcept/componentAndProps";

import Clock from "./mainconcept/stateAndLifeCycle";

// ReactDOM.render(<FirstComponent />, document.getElementById("root"));

ReactDOM.render(<Clock timerName="bn-BD" />, document.getElementById("root"));
