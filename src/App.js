import React, { useState } from 'react';
import './App.css';

import Board from './components/Board';

const PLAYER_1 = 'x';
const PLAYER_2 = 'o';
let winner = ''

const generateSquares = () => {
  const squares = [];

  let currentId = 0;

  for (let row = 0; row < 3; row += 1) {
    squares.push([]);
    for (let col = 0; col < 3; col += 1) {
      squares[row].push({
        id: currentId,
        value: '',
      });
      currentId += 1;
    }
  }

  return squares;
}

const App = () => {
  const [squares, setSquares] = useState(generateSquares());
  const [currentPlayer, setCurrentPlayer] = useState(PLAYER_1);

  const updateSquares = (updatedSquare) => {
    let newSquares = [];

    if (winner) {
      newSquares = squares;
    } else {
      squares.forEach((row) => {
        let newRow = [];
        row.forEach((square) => {
          if (square.id === updatedSquare.id && square.value === '') {
            updatedSquare.value = currentPlayer;
            newRow.push(updatedSquare);
            
            let player = currentPlayer === PLAYER_1 ? PLAYER_2 : PLAYER_1;
            setCurrentPlayer(player);
          } else {
            newRow.push(square);
          }
        });
        newSquares.push(newRow);
      });
    }

    setSquares(newSquares);
    checkForWinner(newSquares);
  }


  const checkForWinner = (squares) => {
    // Complete in Wave 3
    // You will need to:
    // 1. Go accross each row to see if 
    //    3 squares in the same row match
    //    i.e. same value
    const isX = (value) => value === 'x'; 
    const isO = (value) => value === 'o'; 

    [...squares].forEach((row)=> {
      let fullRow = row.map( (obj => obj.value));

      if (fullRow.every(isX)) {
        winner = 'X';
      } else if (fullRow.every(isO)) {
        winner = 'O';
      }
    });


    // 2. Go down each column to see if
    //    3 squares in each column match
    let rowBase = 0

    for (let col = 0; col < 3; col += 1) {
      let fullColumn = []
      fullColumn.push(squares[rowBase][col].value);
      fullColumn.push(squares[rowBase + 1][col].value);
      fullColumn.push(squares[rowBase + 2][col].value);

      if (fullColumn.every(isX)) {
        winner = 'X';
      } else if (fullColumn.every(isO)) {
        winner = 'O';
      }
    };

    // 3. Go across each diagonal to see if 
    //    all three squares have the same value.

    let diagonalTopLeft = []
    let diagonalTopRight = []
    let leftColumn = 0
    let rightColumn = 2

    squares.forEach((row) => {
      diagonalTopLeft.push(row[leftColumn].value);
      leftColumn += 1;

      diagonalTopRight.push(row[rightColumn].value)
      rightColumn -= 1;
    });

    if (diagonalTopLeft.every(isX) || diagonalTopRight.every(isX)) {
      winner = 'X';
    } else if (diagonalTopLeft.every(isO) || diagonalTopRight.every(isO)) {
      winner = 'O';
    }
  };

  const resetGame = () => {
    // Complete in Wave 4
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>React Tic Tac Toe</h1>
        <h2> {winner === '' ? 'No winner yet!' : `Winner is ${winner}` } </h2>
        <button>Reset Game</button>
      </header>
      <main>
        <Board squares={squares} onClickCallback={updateSquares}/>
      </main>
    </div>
  );
}

export default App;
