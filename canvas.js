function drawBoard() {
  board.lineWidth = 8;
  board.lineCap = "round";
  board.lineJoin = "round";
  board.fillStyle = "#F3F5FC";
  board.strokeStyle = "#0A3871";
  board.fillRect(0, 0, 1200, 650);
  board.beginPath();
  board.moveTo(650, 400);
  board.lineTo(900, 400);
  board.stroke();
  board.closePath();
}

function drawLines() {
  board.lineWidth = 6;
  board.lineCap = "rond";
  board.lineJoin = "rond";
  board.strokeStyle = "#0A3871";
  board.beginPath();
  let size = 600 / secretword.length;
  for (let i = 0; i < secretword.length; i++) {
    board.moveTo(500 + size * i, 480);
    board.lineTo(550 + size * i, 480);
  }
  board.stroke();
  board.closePath();
}

function writeRigthLetter(index) {
  board.font = "bold 52px Inter";
  board.lineWidth = 6;
  board.lineCap = "round";
  board.lineJoin = "round";
  board.fillStyle = "#0A3871";
  let size = 600 / secretword.length;
  board.fillText(secretword[index], 505 + size * index, 460);
  board.stroke();
}

function showRigthLetter(letter, errorsLeft) {
  board.lineWidth = 8;
  board.font = "bold 40px Inter";
  board.lineCap = "round";
  board.lineJoin = "round";
  board.fillStyle = "#0A3871";
  board.fillText(letter, 535 + 40 * (10 - errorsLeft), 540, 40);
}

function drawHangman(score) {
  board.lineWidth = 8;
  board.lineCap = "round";
  board.lineJoin = "rond";
  board.strokeStyle = "#0A3871";
  if (score === 8) {
    board.moveTo(700, 400);
    board.lineTo(700, 80);
  }
  if (score === 7) {
    board.moveTo(850, 80);
    board.lineTo(700, 80);
  }
  if (score === 6) {
    board.moveTo(850, 80);
    board.lineTo(850, 121);
  }
  if (score === 5) {
    board.moveTo(900, 180);
    board.arc(850, 180, 50, 0, Math.PI * 2);
  }
  if (score === 4) {
    board.moveTo(850, 310);
    board.lineTo(850, 230);
  }
  if (score === 3) {
    board.moveTo(850, 310);
    board.lineTo(800, 340);
  }
  if (score === 2) {
    board.moveTo(850, 310);
    board.lineTo(890, 340);
  }
  if (score === 1) {
    board.moveTo(850, 260);
    board.lineTo(800, 280);
  }
  if (score === 0) {
    board.moveTo(850, 260);
    board.lineTo(890, 280);
  }
  board.stroke();
  board.closePath();
}

function loose() {
  board.font = " bold 42px Inter";
  board.lineWidth = 9;
  board.lineCap = "round";
  board.lineJoin = "round";
  board.fillStyle = "red";
  board.fillText("Lo siento, perdiste 😓😓😓 ", 550, 280);
  board.fillText("Fin del juego", 650, 380);
}

function win() {
  board.font = "bold 42px Inter";
  board.lineWidth = 6;
  board.lineCap = "round";
  board.lineJoin = "round";
  board.fillStyle = "green";
  board.fillText("Ganaste, ¡Felicidades! 🎉🎉🎉🎉", 550, 320);
  setTimeout(recargar, 5000);
}

function recargar() {
  location.reload();
}
