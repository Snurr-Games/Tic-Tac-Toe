const body         = document.querySelector('body')
const game         = body.querySelector('#game')
const setupForm    = body.querySelector('#setup-form')
const resultForm   = body.querySelector('#result-form')
const resultWinner = resultForm.querySelector('h5')
const quitBtn      = resultForm.querySelector('#quit-btn')
const canvas       = body.querySelector('canvas')
const ctx          = canvas.getContext('2d')
const playerScore1 = body.querySelector('#score-player-1 h4')
const playerScore2 = body.querySelector('#score-player-2 h4')

canvas.width = game.clientWidth
canvas.height = setupForm.clientHeight

module.exports = { 
  setupForm,
  resultForm, 
  resultWinner,
  quitBtn,
  canvas, 
  ctx, 
  playerScore1, 
  playerScore2
}