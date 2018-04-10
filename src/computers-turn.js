const state      = require('./state')
const getLines   = require('./get-lines')

function computersTurn() {

  const lines = getLines()
  const targets = []

  lines.forEach(line => line.filter(cell => cell.owner == 2).length > state.size / 2 ? targets.push(line) : null)
  lines.forEach(line => line.filter(cell => cell.owner == 1).length > state.size / 2 ? targets.push(line) : null)

  if (targets.some(line => line.some(cell => cell.owner == 0))) {
    const target = 
      targets
        .find(line => line.some(cell => cell.owner == 0))
        .find(cell => cell.owner == 0)

    state.board.forEach((row, x) => {
      state.board[x].forEach((cell, y) => {
        if (cell.x == target.x && cell.y == target.y) {
          state.board[x][y].owner = 2
        }
      })
    })

  } else {
    const available = []
    state.board.forEach((row, x) => {
      row.forEach((cell, y) => !cell.owner ? available.push({x, y}) : false)
    })

    if (available.length) {
      const { x, y } = available[Math.floor(Math.random() * available.length)]
      state.board[x][y].owner = 2
    }
  }

  // Require checkBoard function cause browserify is weird
  require('./check-board')()

}

module.exports = computersTurn