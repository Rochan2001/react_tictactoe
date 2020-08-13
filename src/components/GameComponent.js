import React from "react";
import Board from "./BoardComponent";

export default class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [{ squares: Array(9).fill(null) }],
      isXNext: false,
      stepNumber: 0,
      isToggle: false,
    };
  }
  jumpTo(step) {
    this.setState({ stepNumber: step, xIsNext: step % 2 === 0 }, () => {
      console.log(this.state.stepNumber);
    });
  }
  toggleSort = () => {
    this.setState((state) => ({
      isToggle: !state.isToggle,
    }));
  };
  handleClick(i) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.state.isXNext ? "Y" : "X";
    this.setState({
      history: history.concat([{ squares: squares }]),
      stepNumber: history.length,
      isXNext: !this.state.isXNext,
    });
  }
  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const winner = calculateWinner(current.squares);
    const moves = history.map((step, move) => {
      const desc = move ? "Go to move #" + move : "Go to game start";
      return (
        <li key={move}>
          {" "}
          {this.state.stepNumber === move ? (
            <button onClick={() => this.jumpTo(move)}>
              <strong>{desc}</strong>
            </button>
          ) : (
            <button onClick={() => this.jumpTo(move)}>{desc}</button>
          )}{" "}
        </li>
      );
    });
    const moves_toggle = this.state.isToggle ? moves.sort().reverse() : moves;
    let status;
    if (winner) {
      status = "Winner: " + winner;
    } else {
      status = "Next player: " + (this.state.isXNext ? "X" : "O");
    }
    return (
      <div>
        <Board squares={current.squares} onClick={(i) => this.handleClick(i)} />
        <div className="container">
          <div>
            <h3>
              {status} {"  "} <button onClick={this.toggleSort}>Sort</button>
            </h3>
          </div>{" "}
          <ol>{moves_toggle}</ol>
        </div>
      </div>
    );
  }
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
