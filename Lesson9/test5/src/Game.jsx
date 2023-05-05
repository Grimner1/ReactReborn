import React, { Component } from "react";
import Board from "./Board";

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      some: "",
    };
  }

  render() {
    return (
      <div className="board">
        <Board />
      </div>
    );
  }
}
export default Game;

// 1. при нажатии на кнопку отобразить Х и У по очередно;
// 2. каждый шаг записывать в массив;
