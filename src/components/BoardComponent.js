import React from "react";
import Square from "./SquareComponent";

export default class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null),
    };
  }

  handleClick(i) {
    const squares = this.state.squares.slice();
    squares[i] = "X";
    this.setState({
      squares: squares,
    });
  }
  renderSquare(i) {
    return (
      <Square
        value={this.state.squares[i]}
        onClick={() => {
          this.handleClick(i);
        }}
      />
    );
  }
  render() {
    return (
      <div>
        <h1>Tic Tac Toe</h1>
        <table>
          <tbody>
            <tr>
              <td>{this.renderSquare(0)}</td>
              <td className="vert">{this.renderSquare(1)}</td>
              <td>{this.renderSquare(2)}</td>
            </tr>
            <tr>
              <td className="hori">{this.renderSquare(3)}</td>
              <td className="vert hori">{this.renderSquare(4)}</td>
              <td className="hori">{this.renderSquare(5)}</td>
            </tr>
            <tr>
              <td>{this.renderSquare(6)}</td>
              <td className="vert">{this.renderSquare(7)}</td>
              <td>{this.renderSquare(8)}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
