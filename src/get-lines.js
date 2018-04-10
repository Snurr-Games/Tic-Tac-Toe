const state = require('./state')

function getLines() {

  const lines = []

  // Rows
  state.board.forEach(row => lines.push(row))

  // Columns
  state.board[0].forEach((col, y) => lines.push(state.board.map((row, x) => state.board[x][y])))

  // Diagonal top-left to bottom-right
  lines.push(state.board.map((row, x) => state.board[x][x]))

  // Diagonal top-right to bottom-left
  const board = state.board.slice().reverse()
  lines.push(board.map((row, x) => board[x][x]))

  return lines

}

module.exports = getLines