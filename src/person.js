import React, { Component } from "react";
import classes from "./components/Person.css";

const Person = (props) => {
  return (
    <div className={classes.Person}>
      <p onClick={props.click}>
        my name is {props.name} and age is {props.age}
      </p>
      <input type="text"></input>
    </div>
  );
};
export default Person;
