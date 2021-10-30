window.addEventListener("load", function () {
  console.log("loaded");
  function generateGame() {
    let canvas = document.querySelector("#snake-canvas");
    const ctx = canvas.getContext("2d");

    const roverGame = new Game({
      ctx: ctx,
      rover: new Rover(10, 10, "N"),
    });

    // snakeGame.start();
    roverGame.start();
  }

  const startButton = document.querySelector("#start");

  startButton.addEventListener("click", generateGame);
});
