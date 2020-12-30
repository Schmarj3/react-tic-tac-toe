import React, { useState } from 'react';
import './App.css';

import Board from './components/Board';

const PLAYER_1 = 'x';
const PLAYER_2 = 'o';

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
  const [winner, setWinner] = useState('');

  const onClickCallback = (id) => {
    if (id < 3) {
      squares[0][id].value = currentPlayer;
    } else if (id < 6) {
      squares[1][id - 3].value = currentPlayer;
    } else {
      squares[2][id - 6].value = currentPlayer;
    }

    // (currentPlayer === PLAYER_1) ? setCurrentPlayer(PLAYER_2) : setCurrentPlayer(PLAYER_1);
    setSquares(squares);
  }


  const checkForWinner = () => {
    // Complete in Wave 3
    // You will need to:
    // 1. Go accross each row to see if 
    //    3 squares in the same row match
    //    i.e. same value
    const isX = (value) => value === 'x'; 
    const isO = (value) => value === 'o'; 

    [...squares].forEach((row)=> {
      let fullRow = row.map( (obj => obj.value));
      console.log(fullRow.every(isX));

      if (fullRow.every(isX)) {
        setWinner(PLAYER_1);
      } else if (fullRow.every(isO)) {
        setWinner(PLAYER_2);
      }
    });


    // 2. Go down each column to see if
    //    3 squares in each column match
    let fullColumn = []
    let rowBase = 0

    for (let col = 0; col < 3; col += 1) {
      fullColumn.push(squares[rowBase][col]);
      fullColumn.push(squares[rowBase + 1][col]);
      fullColumn.push(squares[rowBase + 2][col]);

      if (fullColumn.every === currentPlayer) {
        console.log(`Check Column: ${fullColumn}`)
        return currentPlayer;
      }
    };

    // 3. Go across each diagonal to see if 
    //    all three squares have the same value.

    let diagonalTopLeft = []
    let diagonalTopRight = []
    let leftColumn = 0
    let rightColumn = 2

    squares.forEach((row) => {
      diagonalTopLeft.push(row[leftColumn]);
      leftColumn += 1;

      diagonalTopRight.push(row[rightColumn])
      rightColumn -= 1;
    });

    if (diagonalTopLeft.every === currentPlayer || diagonalTopRight.every === currentPlayer) {
      console.log(`Check Left Diagonal: ${diagonalTopLeft}`)
      console.log(`Check Right Diagonal: ${diagonalTopRight}`)
      return currentPlayer;
    }
    return winner



    // helper method for the win condition
  };

  const resetGame = () => {
    // Complete in Wave 4
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>React Tic Tac Toe</h1>
        <h2>Winner is {winner} </h2>
        <button>Reset Game</button>
      </header>
      <main>
        <Board squares={squares} onClickCallback={onClickCallback}/>
      </main>
    </div>
  );
}

export default App;
