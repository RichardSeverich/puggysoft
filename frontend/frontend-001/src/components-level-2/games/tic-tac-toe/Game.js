import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import PropTypes from "prop-types";
import CommonLoading from "../../../components-level-1/CommonLoading";
import Square from "./Square";
import Button from "react-bootstrap/esm/Button";
import computer from "./Computer";

const enumTurns = {
  X: "X",
  O: "O"
};

const winnerLines = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

function calculateWinner (squares) {
  for (let i = 0; i < winnerLines.length; i++) {
    const [a, b, c] = winnerLines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

function Game ({ computerMode }) {
  const [squares, setSquares] = useState([null, null, null, null, null, null, null, null, null]);
  const [turn, setTurn] = useState(enumTurns.X);
  const [isLoading, setIsLoading] = useState(false);
  const computerTurn = enumTurns.X;
  const userTurn = enumTurns.O;

  useEffect(() => {
    setIsLoading(true);
    if (computerMode & turn === computerTurn) {
      const nextMoveIndex = computer.getNextMove(winnerLines, squares, computerTurn, userTurn);
      onSquareClick(nextMoveIndex);
    }
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  }, [squares]);

  function onSquareClick (squarePosition) {
    if (squares[squarePosition] === null) {
      const squaresCopy = squares.slice();
      if (turn === enumTurns.X) {
        squaresCopy[squarePosition] = enumTurns.X;
        setTurn(enumTurns.O);
      } else {
        squaresCopy[squarePosition] = enumTurns.O;
        setTurn(enumTurns.X);
      }
      setSquares(squaresCopy);
      if (calculateWinner(squaresCopy)) {
        alert("Ganador " + turn);
        reset();
      }
    } else {
      alert("La cuadro esta ocupada intente de nuevo");
    }
  }

  function reset () {
    setSquares([null, null, null, null, null, null, null, null, null]);
    setTurn(enumTurns.X);
  }

  if (isLoading) {
    return <CommonLoading />;
  }

  return (
    <Card>
      <Card.Body>
        <Card.Title>Tres en raya</Card.Title>
        <Card.Text>
          <div>Es el turno de: {turn}</div>
          <Button onClick={() => {
            reset();
          }}>Reset</Button>
        </Card.Text>
        <div className="board-row">
          <Square value={squares[0]} onSquareClick={() => onSquareClick(0)} />
          <Square value={squares[1]} onSquareClick={() => onSquareClick(1)} />
          <Square value={squares[2]} onSquareClick={() => onSquareClick(2)} />
        </div>
        <div className="board-row">
          <Square value={squares[3]} onSquareClick={() => onSquareClick(3)} />
          <Square value={squares[4]} onSquareClick={() => onSquareClick(4)} />
          <Square value={squares[5]} onSquareClick={() => onSquareClick(5)} />
        </div>
        <div className="board-row">
          <Square value={squares[6]} onSquareClick={() => onSquareClick(6)} />
          <Square value={squares[7]} onSquareClick={() => onSquareClick(7)} />
          <Square value={squares[8]} onSquareClick={() => onSquareClick(8)} />
        </div>
      </Card.Body>
    </Card>
  );
}

export default Game;

Game.propTypes = {
  computerMode: PropTypes.bool
};

Game.defaultProps = {
  computerMode: false
};
