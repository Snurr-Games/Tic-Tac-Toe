const { canvas, setupForm, resultForm, quitBtn } = require('./dom')
const state         = require('./state')
const generateBoard = require('./generate-board')
const checkBoard    = require('./check-board')
const render        = require('./render')

setupForm.addEventListener('submit', e => {

  e.preventDefault()


  generateBoard(e.target['size'].value)
  
  setupForm.style.display = 'none'
  canvas.style.display = 'block'
  state.currentPlayer = 1
  
  render()

})

resultForm.addEventListener('submit', e => {

  e.preventDefault()

  generateBoard(state.size)

  resultForm.style.display = 'none'
  state.currentPlayer = 1

  render()

})

quitBtn.addEventListener('mouseup', e => {
  
  state.currentPlayer = 0
  state.players[0].points = 0
  state.players[1].points = 0

  resultForm.style.display = 'none'
  canvas.style.display = 'none'
  setupForm.style.display = 'grid'

  render()

})

canvas.addEventListener('mouseup', e => {
  
  if (!state.currentPlayer) return

  state.board.forEach((row, x) => {
    state.board[x].forEach((cell, y) => {
      if (cell.owner) return

      if (
        e.layerX > cell.x && e.layerX < cell.x + cell.width &&
        e.layerY > cell.y && e.layerY < cell.y + cell.height
      ) {

        state.board[x][y].owner = state.currentPlayer

        checkBoard()
      
      }

    })
  })

})