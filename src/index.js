import React from "react";
import ReactDOM from "react-dom";
//import "./index.css";
import App from "./App";
import Radium from "radium";
import "bootstrap/dist/css/bootstrap.css";
import * as serviceWorker from "./serviceWorker";
import Counter from "./components/counter";

ReactDOM.render(<App />, document.getElementById("root"));
//const abc=<h1>hello world</h1>;
//console.log(abc);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
