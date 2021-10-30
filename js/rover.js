class Rover {
  constructor(posX = 0, posY = 0, direction = "N") {
    this.posX = posX;
    this.posY = posY;
    this.direction = direction;
  }

  goForward() {
    switch (this.direction) {
      case "N":
        this.posY++;
        break;
      case "E":
        this.posX++;
        break;
      case "S":
        this.posY--;
        break;
      case "W":
        this.posX--;
        break;
      default:
        break;
    }
  }
  turnLeft() {
    switch (this.direction) {
      case "N":
        this.direction = "W";
        break;
      case "E":
        this.direction = "N";
        break;
      case "S":
        this.direction = "E";
        break;
      case "W":
        this.direction = "S";
        break;
      default:
        break;
    }
  }
  turnRight() {
    switch (this.direction) {
      case "N":
        this.direction = "E";
        break;
      case "E":
        this.direction = "S";
        break;
      case "S":
        this.direction = "W";
        break;
      case "W":
        this.direction = "N";
        break;
      default:
        break;
    }
  }
}
