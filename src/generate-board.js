const { canvas } = require('./dom')
const state      = require('./state')

function generateBoard(size) {

  state.size = size
  state.board = []

  const dim = canvas.width - 100

  for (let row = 0; row < size; row++) {
    state.board[row] = []

    for (let column = 0; column < size; column++) {
      state.board[row][column] = {
        owner: 0, 
        x: Math.floor( dim / size * column + 50 ), 
        y: Math.floor( dim / size * row ),
        width: dim / size,
        height: dim / size
      }
    }
  }

}

module.exports = generateBoard