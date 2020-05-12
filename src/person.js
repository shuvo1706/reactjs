import React, { Component } from "react";
import "./components/Person.css";
import Radium from "radium";
const Person = (props) => {
  const style = {
    "@media(min-width:500px)": {
      width: "450px",
    },
  };
  return (
    <div className="Person">
      <p onClick={props.click}>
        my name is {props.name} and age is {props.age}
      </p>
      <input type="text"></input>
    </div>
  );
};
export default Radium(Person);
//dsdsdsdsdsdsd
