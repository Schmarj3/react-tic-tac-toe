# React Tic Tac Toe

## At A Glance

- Pair [Stage 2 project](https://github.com/Ada-Developers-Academy/pedagogy/blob/master/classroom/rule-of-three.md#stage-2)
- Due EOD Thursday on December 31st

## Learning Goals

- Build React components which recieve data through props
- Build container components which recieve data through props
- Build a react component using state
- Pass callback functions to child components and use them to update state

## Objective

We will create a Tic Tac Toe game which allows users to interact with the screen to add play the classic game.  If you are unfamilair with Tic Tac Toe, [you can read about it](https://www.thesprucecrafts.com/tic-tac-toe-game-rules-412170).

You can also [play with a working version of the game](https://adagold.github.io/react-tic-tac-toe/) on github pages!

## Getting Started

We have provided you an initial Application Skeleton generated with create-react-app. The application will have the following components:

- `Square` - This component represents one square in a tic-tac-toe board.  It will take in props representing the value to show on the board (`x`, `o`, or `''`), an `id`, and a callback function called `onClickCallback`.
- `Board` - This component will take a callback function, `onClickCallback` and a list of 2D array of JavaScript objects with ids, and values and will render `Square` components each with ids, values and the callback function passed in as props.
- `App` - This component is the traditional outer component of the React App. The App component will manage the state for the application and track the status for the game including the winner.

**Remember to run `npm install` or `yarn` to install dependencies into `node_modules`**

## What's Already Here

We have already implemented some pieces of this project:

- `Square.css` a css file for styling each square of the game.
- `Board.css` a css file to style the game board
- `App.css` a css file to 
- `App.js` a starter `App` component
  - `App.test.js` a test file for the `App` component
- `Board.js` a starter `Board` component
  - `Board.test.js` a test file for the `Board` component
- `Square.js` a starter `Square` component.
  - `Square.test.js` a test file for the `Square` component

## Setup Requirements

1. Fork and clone this repo
1. Install this project's dependencies with `$ npm install`
1. Start the local development server that runs our React project with `$ npm start`

## Wave 1

Update the `Board` component to render the grid of squares.  You will need to complete the  `generateSquareComponents` function in the `Board` component.

`App` should pass to `Board` a 2D array of JavaScript objects and Board should use that to render an array of `Square` components.

Each `Square` component should take 2 props at this stage.

- `id` the Id of the square
- `value` the value being displayed in the square

We have provided you a function `generateSquares` in `App.js` which generates a 2D array of JavaScript objects with Ids and values (blank strings).  These should be used to provide data to `Board` and `Square` via props.

### Tests

We have test files to verify the correctness of the `Square` and `Board` components.  You can run the tests with:
  - `npm test src/components/Square.test.js`
  - `npm test src/components/Board.test.js`

These tests verify that the components show up on the screen when rendered and that the callback function is called when a square is clicked on.
## Wave 2

For Wave 2 you should add the functionality to change the value of a square when the user clicks on it.

To do so you will need to pass a callback function from `App` to `Board` and on to each square.  

You will need to write `onClickCallback` a callback function to call when the `Square` is clicked on and pass it through `Board` to each `Square` component.

When the user clicks first clicks on a square it should set the square's value to the proper `x` or `o` depending on the current player's turn.

### Tests

We have a group of tests inside `App.test.js` with a describe titled `Wave 2` which runs tests to verify if Xs and Os appear correctly when the squares are clicked on.

## Wave 3

For wave 3, you will add the game logic to detect if a player has won or if there is a tie (all squares filled and with no winner).  To do this you will complete the `checkForWinner` method and display the winner in the `header` section.  The game should also cease responding to clicks on the board if the game has a winner.

### Tests

There are additional tests that you can unskip to verify if a winner is detected.  The tests check for:

- If o wins the app has 'Winner is o' appearing on the browser window
- If x wins the app has 'Winner is x' appearin gon the browser window

**optional** 

-  If you feel ambitious see if you can add a test to detect ties!
-  You can also create a test to ensure that you can't click on squares after a winner is detected!

## Optional:  Wave 4

For wave 4 you will add a button to the `App` component to reset the game and clear all the game squares.  

### Tests

There are additional tests that you can unskip to verify if a the reset button resets the grid.  The tests check for:

- When the reset button (with the text 'Reset Game') is clicked the grid should go back to blank squares.  It selects all the `<button class="square"></button>` elements and verifies that they have no text.
- Immediately after the reset button is clicked, there shouldn't be a 'Winner is o` or x appearing in the browser window.

## Optional - Deploy on the web

For an optional bit of fun try to use [github pages](https://github.com/gitname/react-gh-pages) to deploy your game on the web!

## What We Are Looking For

Check out the [feedback template](feedback.md) which lists the items instructors will be looking for as they evaluate your project.

