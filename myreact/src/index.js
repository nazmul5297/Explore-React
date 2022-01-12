import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { element, immutable } from "./mainconcept/element";

// ReactDOM.render(element, document.getElementById("root"));

// if we want to see that how a element is mutable than comment out the line ReactDOM

// immutable();

// and now see the screen and its show hellow world along with the time and it's not changing
// if because of element is immutable. If we want to chage it then we need to change the state
// and rerender it again and again. Like in below

setInterval(immutable, 1000);
