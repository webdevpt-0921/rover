class Game {
  constructor(options) {
    this.ctx = options.ctx;
    this.rover = options.rover;
  }

  _drawRover() {
    this.ctx.fillStyle = "green";
    this.ctx.fillRect(this.rover.posX, this.rover.posY, 10, 10);
  }

  _kh7() {
    this.ctx.fillStyle = "white";
    this.ctx.fillRect(0, 0, 500, 500);
  }

  _renderFrameGame() {
    console.log("render");
    this._kh7();
    this._drawRover();

    if (this.rover.checkColision(object)) {
    }

    if (this.rover.lifes === 0) {
    } else {
      window.requestAnimationFrame(this._renderFrameGame.bind(this));
    }
  }

  assignControl() {
    document.addEventListener("keydown", (event) => {
      // console.log(event);
      switch (event.code) {
        case "ArrowUp":
          this.rover.goForward();
          break;
        // case "ArrowDown":

        //   break;
        case "ArrowLeft":
          this.rover.turnLeft();
          break;
        case "ArrowRight":
          this.rover.turnRight();
          break;
        default:
          break;
      }
    });
  }

  start() {
    this.assignControl();
    window.requestAnimationFrame(this._renderFrameGame.bind(this));
  }
}
