const { canvas, ctx, playerScore1, playerScore2 } = require('./dom')
const state = require('./state')

function render() {

  const { board, size } = state

  ctx.fillStyle = '#E6E5D0'
  ctx.strokeStyle = '#201E1E'
  
  // Clear canvas
  ctx.fillRect(0, 0, canvas.width, canvas.height)

  board.forEach(row => {
    row.forEach(cell => {
      // Draw grid
      ctx.lineWidth = cell.width * 0.02
      ctx.strokeRect(cell.x, cell.y, cell.width, cell.height)

      const margin = cell.width * 0.2
      ctx.lineWidth = cell.width * 0.04

      if (cell.owner == 1) { // Draw X
        ctx.beginPath()
        ctx.moveTo(cell.x + margin, cell.y + margin)
        ctx.lineTo(cell.x + cell.width - margin, cell.y + cell.height - margin)
        ctx.stroke()
        ctx.beginPath()
        ctx.moveTo(cell.x + cell.width - margin, cell.y + margin)
        ctx.lineTo(cell.x + margin, cell.y + cell.height - margin)
        ctx.stroke()
      
      } else if (cell.owner == 2) { // draw O
        ctx.beginPath()
        ctx.arc(cell.x + cell.width / 2, cell.y + cell.height / 2, cell.width / 2 - margin, 0, 2 * Math.PI)
        ctx.stroke()
      }

    })
  })

  // Hide outer border
  ctx.lineWidth = 5
  ctx.globalCompositeOperation = 'destination-out'
  ctx.strokeRect(board[0][0].x, board[0][0].y, board[0][0].width * size, board[0][0].height * size)
  ctx.globalCompositeOperation = 'source-over';

  // Scores
  playerScore1.innerHTML = state.players[0].points
  playerScore2.innerHTML = state.players[1].points

}

module.exports = render