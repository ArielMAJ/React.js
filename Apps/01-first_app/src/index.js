import React from "react";
import ReactDOM from "react-dom";

const number = 123;

ReactDOM.render(
  <div>
    <h1>Lorem ipsum</h1>
    <ul>
      <li>dolor</li>
      <li>sit</li>
      <li>amet</li>
      <li>Constant: {number}</li>
      <li>Random: {Math.floor(Math.random()*100)}</li>
      <li>Curly: {"{{}}"}</li>
    </ul>
  </div>,
  document.getElementById("root")
);
