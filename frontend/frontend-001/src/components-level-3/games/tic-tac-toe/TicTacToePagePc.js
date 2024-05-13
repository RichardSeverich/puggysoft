import React from "react";
import NavBar from "./../../../components-level-2/navbar/NavBar";
import Game from "./../../../components-level-2/games/tic-tac-toe/Game";

function GamePage () {
  return (
    <div className="tic-tac-toe-page">
      <NavBar></NavBar>
      <Game computerMode></Game>
    </div>
  );
}

export default GamePage;
