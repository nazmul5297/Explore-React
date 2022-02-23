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
import FirstFunctionalComponent from "./mainconcept/functionalComponent/firstComponent.js";
import SecondFunctionalComponent from "./mainconcept/functionalComponent/secondFunctionalComponent";

ReactDOM.render(
  // //component pass with props
  // <FirstComponentWithProps timerName="bn-BD" />,

  // // first class component with life cycle methods
  // <FirstClassComponent />,

  // first functional component with use state hooks
  // <FirstFunctionalComponent />,
  <App />,

  document.getElementById("root")
);
