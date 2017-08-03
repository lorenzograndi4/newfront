import React, { PureComponent } from 'react'
import Square from './square'


class Board extends React.Component {
  constructor() {
      super();
      this.state = {
        squares: Array(9).fill(null),
      };
    }

    handleClick(i) {
      const squares = this.state.squares.slice();
      squares[i] = 'X';
      this.setState({squares: squares});
    }

  renderSquare(i) {
    return <Square value={i}
    onClick={() => this.handleClick(i)}
    />;
  }
// <tr><td>1</td><td>3</td><td>5</td><td>3</td></tr> //horizontal numbers
  render() {
    const status = 'Next player: X';

    return (
      <div>
      <table>
        <div className="board-row">
          <th>3</th> <tr>4<td> 1</td>    <td>3</td><td>5</td><td>3</td></tr>
          <td>1{this.renderSquare( )}</td>
          <td>{this.renderSquare()}</td>
          <td>{this.renderSquare( )}</td>
          <td>{this.renderSquare( )}</td>
          <td>{this.renderSquare( )}</td>
        </div>
        <div className="board-row">

          <td>1{this.renderSquare( )}</td>
          <td>{this.renderSquare( )}</td>
          <td>{this.renderSquare( )}</td>
          <td>{this.renderSquare( )}</td>
          <td>{this.renderSquare( )}</td>
        </div>
        <div className="board-row">
          <td>3{this.renderSquare( )}</td>
          <td>{this.renderSquare( )}</td>
          <td>{this.renderSquare( )}</td>
          <td>{this.renderSquare( )}</td>
          <td>{this.renderSquare( )}</td>
        </div>
        <div className="board-row">
          <td>4{this.renderSquare( )}</td>
          <td>{this.renderSquare( )}</td>
          <td>{this.renderSquare( )}</td>
          <td>{this.renderSquare( )}</td>
          <td>{this.renderSquare( )}</td>
        </div>

        <div className="board-row">
          <td>1{this.renderSquare( )}</td>
          <td>{this.renderSquare( )}</td>
          <td>{this.renderSquare( )}</td>
          <td>{this.renderSquare( )}</td>
          <td>{this.renderSquare( )}</td>

        </div>
        </table>
      </div>
    );
  }
}

<tr id='fieldRow0' class='fieldRow'>
  <td id='fieldDatax0y0' class='fieldData0'>1</td>
  <td id='fieldDatax1y0' class='fieldData0'>2</td>
  <td id='fieldDatax2y0' class='fieldData0'>3</td>
  <td id='fieldDatax3y0' class='fieldData0'></td>
</tr>

export default Board
