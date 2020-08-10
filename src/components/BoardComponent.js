import React from "react";
import Square from "./SquareComponent";

export default class Board extends React.Component {
  renderSquare(i) {
    return <Square value={i} />;
  }
  render() {
    return (
      <div>
        <h1>Tic Tac Toe</h1>
        <table>
          <tr>
            <td>{this.renderSquare(0)}</td>
            <td class="vert">{this.renderSquare(1)}</td>
            <td>{this.renderSquare(2)}</td>
          </tr>
          <tr>
            <td class="hori">{this.renderSquare(3)}</td>
            <td class="vert hori">{this.renderSquare(4)}</td>
            <td class="hori">{this.renderSquare(5)}</td>
          </tr>
          <tr>
            <td>{this.renderSquare(6)}</td>
            <td class="vert">{this.renderSquare(7)}</td>
            <td>{this.renderSquare(8)}</td>
          </tr>
        </table>
      </div>
    );
  }
}
