import ReactDOM from "react-dom";

// element nothing but a  javascript function which can return a simple block
// element is smallest building block of react
//

export const element = <h2>hi this is nazmul</h2>;

//here element is not a html rather than it is jsx and this element has all power of normal
// javascript

// element is immutable that's mean element can not be changed and look like a single scrren

export const immutable = () => {
  const element = (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  );
  ReactDOM.render(element, document.getElementById("root"));
};
