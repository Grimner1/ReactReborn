import React, { Component } from "react";
import Square from "./Square";
import GameHistory from "./GameGistory";

const winnerSquares = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const checkToWins = (array, symbol) => {
  return winnerSquares.forEach((a) => {
    if (
      !(
        array[a[0]] === symbol &&
        array[a[1]] === symbol &&
        array[a[2]] === symbol
      )
    ) {
      return;
    }

    return true;
  });
};

class Board extends Component {
  state = {
    squares: Array(9).fill(null),
    history: [],
    xORy: true,
    isWinner: false,
  };

  handleClick = (squareNumber) => {
    if (this.state.squares[squareNumber]) {
      return;
    }

    const newSquares = this.state.squares.slice();
    const symbol = this.state.xORy ? "X" : "0";
    newSquares[squareNumber] = symbol;

    const newHistory = this.state.history.slice();
    newHistory.push(newSquares);

    this.setState({
      squares: newSquares,
      history: newHistory,
      xORy: !this.state.xORy,
    });

    winnerSquares.forEach((a) => {
      if (
        !(
          newSquares[a[0]] === symbol &&
          newSquares[a[1]] === symbol &&
          newSquares[a[2]] === symbol
        )
      ) {
        return;
      }

      this.setState({
        isWinner: true,
      });
    });
  };

  willStartNewGame = () => {
    this.setState({
      squares: Array(9).fill(null),
      isWinner: false,
    });
  };

  returnGame = (num) => {
    console.log(num);
    console.log("_________");
    this.setState({
      squares: this.state.history[num],
    });
  };

  render() {
    const symbol = this.state.xORy ? "X" : "0";
    const winner = this.state.xORy ? "0" : "X";
    // console.log(this.state.isWinner);

    return (
      <div>
        <div>
          {this.state.isWinner
            ? `Winner is: ${winner}`
            : `Next player: ${symbol}`}
        </div>
        <div>
          <Square
            value={this.state.squares[0]}
            setNewValue={() => this.handleClick(0)}
            endGame={this.state.isWinner}
          />
          <Square
            value={this.state.squares[1]}
            setNewValue={() => this.handleClick(1)}
            endGame={this.state.isWinner}
          />
          <Square
            value={this.state.squares[2]}
            setNewValue={() => this.handleClick(2)}
            endGame={this.state.isWinner}
          />
        </div>
        <div>
          <Square
            value={this.state.squares[3]}
            setNewValue={() => this.handleClick(3)}
            endGame={this.state.isWinner}
          />
          <Square
            value={this.state.squares[4]}
            setNewValue={() => this.handleClick(4)}
            endGame={this.state.isWinner}
          />
          <Square
            value={this.state.squares[5]}
            setNewValue={() => this.handleClick(5)}
            endGame={this.state.isWinner}
          />
        </div>
        <div>
          <Square
            value={this.state.squares[6]}
            setNewValue={() => this.handleClick(6)}
            endGame={this.state.isWinner}
          />
          <Square
            value={this.state.squares[7]}
            setNewValue={() => this.handleClick(7)}
            endGame={this.state.isWinner}
          />
          <Square
            value={this.state.squares[8]}
            setNewValue={() => this.handleClick(8)}
            endGame={this.state.isWinner}
          />
        </div>
        <div>
          <button className="btn__newGame" onClick={this.willStartNewGame}>
            Start new Game
          </button>
          <div className="histiry">
            {this.state.history.map((a, index) => (
              <GameHistory key={index} number={index} click={this.returnGame} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Board;
