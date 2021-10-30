function generateGame() {
  let canvas = game.querySelector("#snake");
  const ctx = canvas.getContext("2d");

  const snakeGame = new Game({
    ctx: ctx,
    // rows: canvas.width / 10,
    // columns: canvas.height / 10,
    // maxCells: 10,
    // snake: new Snake(canvas.width / 10, canvas.height / 10),
  });

  snakeGame.start();
}

const startButton = document.querySelector("#start-canvas");

startButton.addEventListener("click");
