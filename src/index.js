//var React = require("react");
import React from "react";
import ReactDOM from "react-dom";
//var ReactDOM = require("react-dom")

// var h1 = document.createElement("h1");
// h1.innerHTML = "Hello World!";
// document.getElementById("root").appendChild(h1)

//What to show, where to show, callback
ReactDOM.render(
  <div>
    <h1>Hello World</h1>
    <p>This is a paragragh</p>
  </div>,
  document.getElementById("root")
);
