import React, { Component } from "react";
import logo from "./logo.svg";
import styles from "./App.css";
import Person from "./person";
import Radium from "radium";

class App extends Component {
  state = {
    persons: [
      { name: "shuvo", age: 24, Hobby: "basketball" },
      { name: "Aunabil", age: 23, Hobby: "football" },
      { name: "Swapnil", age: 24, Hobby: "pubg" },
      { name: "Tushit", age: 24, Hobby: "travelling" },
    ],
    variable: 1,
    toggle: false,
    list: true,
  };

  Listname = () => {
    if (this.state.list) {
      this.setState({
        list: false,
      });
    } else
      this.setState({
        list: true,
      });
  };
  Hover = (index) => {
    const person = this.state.persons;
    person.splice(index, 1);
    this.setState({
      persons: person,
    });

    console.log("hello motherfucker");
  };

  Switchname = () => {
    console.log(this.state.variable + "hi");
    if (this.state.variable == 1) {
      this.setState({
        variable: 0,
      });
    } else
      this.setState({
        variable: 1,
      });
  };
  Toggle = () => {
    if (this.state.toggle) {
      this.setState({
        toggle: false,
      });
    } else
      this.setState({
        toggle: true,
      });
  };

  render() {
    let persons = 0;
    let btnClass = "";
    /*  const style = {
      border: "1px solid #eee",
      margin: "auto",
      background: "brown",
      cursor: "pointer",
      ":hover": {
        backgroundcolor: "lightgreen",
        text: "black",
      },
    };*/
    return (
      <div className={styles.App}>
        <button
          className={btnClass}
          key={Math.random()}
          onClick={this.Switchname}
        >
          switch
        </button>

        <button
          onClick={this.Listname}
          key={Math.random()}
          className={btnClass}
        >
          list
        </button>
        <button onClick={this.Toggle} className={btnClass} key={Math.random()}>
          toggle
        </button>

        {this.state.toggle
          ? this.state.persons.map(
              <Person
                name={this.state.persons[this.state.variable].name}
                age={this.state.persons[this.state.variable].age}
                click={this.Hover}
                key={Math.random()}
              ></Person>
            )
          : null}

        <div>
          {this.state.list
            ? this.state.persons.map((list, index) => {
                return (
                  <Person
                    name={list.name}
                    age={list.age}
                    click={() => this.Hover(index)}
                    key={Math.random()}
                  ></Person>
                );
              })
            : null}
        </div>
      </div>
    );
    this.style.textcolor = "black";
  }

  //<Person name="shuvo chakma">sylhet cadet college</Person>;
}

export default Radium(App);
