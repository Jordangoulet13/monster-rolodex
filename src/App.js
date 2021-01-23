import React from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      monsters: [
        { name: "Frankeinstein" },
        { name: "Dracula" },
        { name: "Zombie" },
      ],
    };
  }

  render() {
    return (
      <div className="App">
        {this.state.monsters.map((monster, index) => (
          <h1 key={index}>{monster.name}</h1>
        ))}
      </div>
    );
  }
}

export default App;
