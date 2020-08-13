import React from "react";
import Square from "./SquareComponent";

export default class Board extends React.Component {
  renderBoard() {
    let board = [];
    let c = 0;
    for (let i = 0; i < 3; i++) {
      let row = [];
      for (let j = 0; j < 3; j++) {
        if (c === 1) {
          row.push(<td className="vert">{this.renderSquare(c)}</td>);
          c++;
        } else if (c === 3) {
          row.push(<td className="hori">{this.renderSquare(c)}</td>);
          c++;
        } else if (c === 4) {
          row.push(<td className="vert hori">{this.renderSquare(c)}</td>);
          c++;
        } else if (c === 5) {
          row.push(<td className="hori">{this.renderSquare(c)}</td>);
          c++;
        } else if (c === 7) {
          row.push(<td className="vert">{this.renderSquare(c)}</td>);
          c++;
        } else {
          row.push(<td>{this.renderSquare(c)}</td>);
          c++;
        }
      }
      console.log(row);
      board.push(<tr key={i}>{row}</tr>);
    }
    return board;
  }
  renderSquare(i) {
    return (
      <Square
        points={this.props.points}
        value={this.props.squares[i]}
        onClick={() => {
          this.props.onClick(i);
        }}
      />
    );
  }
  render() {
    const board = this.renderBoard();
    return (
      <div className="container">
        <h1>Tic Tac Toe</h1>
        <table>
          <tbody>{board}</tbody>
        </table>
      </div>
    );
  }
}
