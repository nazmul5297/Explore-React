import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import FirstFunctionalComponent from "./mainconcept/functionalComponent/firstComponent";
import { SecondFunctionalComponent } from "./mainconcept/functionalComponent/secondFunctionalComponent";

function App() {
  const [swap, setSwap] = useState(false);

  const swapHandler = () => {
    setSwap(!swap);
  };

  return (
    <>
      <div>
        <div>
          {swap ? <FirstFunctionalComponent /> : <SecondFunctionalComponent />}
        </div>
        <div>
          {" "}
          <button onClick={swapHandler}>Swap Component</button>{" "}
        </div>
      </div>
    </>
  );
}

export default App;
