class Character {
  constructor(name, xPos, yPos, startAngle, topSprite, bottomSprite) {
    this.pos = {
      x: xPos,
      y: yPos,
    };
    this.vel = {
      x: 0,
      y: 0,
    };
    this.movementDir;
    this.aim = startAngle;
    this.name = name;
    this.topSprite = topSprite;
    this.bottomSprite = bottomSprite;
  }

  moveUp() {
    console.log("character move up");
    this.topSprite.setVelocityY(-200);
    this.bottomSprite.setVelocityY(-200);
  }
  moveDown() {
    console.log("character move down");
    this.topSprite.setVelocityY(200);
    this.bottomSprite.setVelocityY(200);
  }
  moveLeft() {
    console.log("character move left");
    this.topSprite.setVelocityX(-200);
    this.bottomSprite.setVelocityX(-200);
  }
  moveRight() {
    console.log("character move right");
    this.topSprite.setVelocityX(200);
    this.bottomSprite.setVelocityX(200);
  }
  stopX() {
    this.topSprite.setVelocityX(0);
    this.bottomSprite.setVelocityX(0);
  }
  updateTopSide() {
    this.topSprite.setX(this.bottomSprite.x);
    this.topSprite.setY(this.bottomSprite.y);
  }
  stopY() {
    this.topSprite.setVelocityY(0);
    this.bottomSprite.setVelocityY(0);
  }
  aiming() {}
}
