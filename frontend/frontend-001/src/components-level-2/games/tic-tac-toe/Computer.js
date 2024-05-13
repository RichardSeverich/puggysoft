
/**
 *
 * @param {*} winnerLines array de arrays de las posiciones de las posibles lineas ganadoras.
 * @param {*} squares las jugadas actuales de tic tac toe.
 * @param {*} computerTurn X o O
 * @param {*} opponentTurn X o O
 * @returns
 */
function getNextMove (winnerLines, squares, computerTurn, opponentTurn) {
  let indexSelected; // Sera el index seleccionado para la jugada.
  // Una vez que encontramos el index ganador debemos saltar las demas interaciones.
  let shouldSkip = false; // Es true si hemos encontrando un index para ganar.
  let shouldSkipOp = false; // Es true si hemos encontrado un index para evitar perdida.
  let indexAvoidLosing; // Index para evitar la perdida guardado.
  let isComputerNearToWin = false; // Si la pc esta a un paso de ganar sera true.
  let isOpponentNearToWin = false; // Si la pc esta a un paso de perder sera true.

  // Primero interamos array de arrays de las posibles lineas ganadoras
  winnerLines.forEach((winLines) => {
    if (shouldSkip) {
      return;
    }
    let winLinesFreeToWin = 0; // Sera 3 si las posiciones ganadoras estan bien para pc.
    let oponentWinLinesFreeToWin = 0; // Sera 3 si las posiciones ganadoras estan bien para el oponent.
    let computerToWin = 3; // Sera 1 si solo le falta 1 jugada para ganar.
    let opponentToWin = 3; // Sera 1 si solo le falta 1 jugada para perder.
    let isIndexSelected = false;
    winLines.forEach((index) => {
      if (squares[index] === null || squares[index] === computerTurn) {
        winLinesFreeToWin++;
        if (squares[index] === computerTurn) {
          computerToWin--;
        }
        if (squares[index] === null && !isIndexSelected) {
          indexSelected = index;
          isIndexSelected = false;
        }
      }
      if (!shouldSkipOp && (squares[index] === null || squares[index] === opponentTurn)) {
        oponentWinLinesFreeToWin++;
        if (squares[index] === opponentTurn) {
          opponentToWin--;
        }
        if (squares[index] === null) {
          indexAvoidLosing = index;
        }
      }
    });
    if (oponentWinLinesFreeToWin === 3 && opponentToWin === 1) {
      shouldSkipOp = true;
      isOpponentNearToWin = true;
    }
    if (winLinesFreeToWin === 3 && computerToWin === 1) {
      shouldSkip = true;
      isComputerNearToWin = true;
    }
  });
  let indexToMove;
  if (isComputerNearToWin) {
    indexToMove = indexSelected;
  } else if (isOpponentNearToWin) {
    indexToMove = indexAvoidLosing;
  } else {
    indexToMove = indexSelected;
  }
  return indexToMove;
}

export default {
  getNextMove
};
