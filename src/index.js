//Create a react app from scratch.
//It should display a h1 heading.
//It should display an unordered list (bullet points).
//It should contain 3 list elements.
import React from "react";
import ReactDOM from "react-dom";
ReactDOM.render(
  <div>
    <h1>Thee Challenge!</h1>
    <ul>
      <li>orange🍊 </li>
      <li>banana 🍌 </li>
      <li>lemon 🍋 </li>
    </ul>
  </div>,
  document.getElementById("root")
);
