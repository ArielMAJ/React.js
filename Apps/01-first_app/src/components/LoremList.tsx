import React from "react";

function LoremList() {
  const number: Number = 123;
  const custom_li_style = {
    color: "blue",
    width: "5em",
    padding: ".2em",
    border: "2px dashed lightblue",
    borderRadius: "10px",
  };

  return (
    <div>
      <h2>Lorem ipsum</h2>

      <ul>
        <li>dolor</li>
        <li>sit</li>
        <li>amet</li>
        <li>Constant: {number.toString()}</li>
        <li style={custom_li_style}>
          Random: {Math.floor(Math.random() * 100)}
        </li>
        <li>Curly: {"{{}}"}</li>
      </ul>
    </div>
  );
}

export default LoremList;
