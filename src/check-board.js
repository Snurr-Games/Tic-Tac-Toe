const { resultForm, resultWinner } = require('./dom')
const state         = require('./state')
const generateBoard = require('./generate-board')
const getLines      = require('./get-lines')
const computersTurn = require('./computers-turn')
const render        = require('./render')

function checkBoard() {

  if (!state.board.some(row => row.some(cell => !cell.owner))) {
    resultForm.style.display = 'grid'
    resultWinner.innerHTML = 'Draw'

  } else if (getLines().some(line => line.every(cell => cell.owner == state.currentPlayer))) {
    state.players[state.currentPlayer -1].points++
    
    resultForm.style.display = 'grid'
    resultWinner.innerHTML = `${state.currentPlayer == 1 ? 'Player 1' : 'Computer'} wins!`

  } else if (state.currentPlayer == 1){
    state.currentPlayer = 2
    computersTurn()
  
  } else  if (state.currentPlayer == 2) {
    state.currentPlayer = 1
  
  }

  render()

}

module.exports = checkBoard