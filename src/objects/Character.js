class Character {
  constructor(name, id, startAngle, topSprite, bottomSprite, bullets) {
    this.id = id;
    this.aim = startAngle;
    this.movementDir = this.aim + 90;
    this.name = name;

    this.topSprite = topSprite;
    this.topSprite.setAngle(this.aim);
    this.bottomSprite = bottomSprite;
    this.bottomSprite.setAngle(this.movementDir);

    this.fireRate = 300;
    this.lastShot = 0;
    this.healthPoints = 100;
    this.bullets = bullets;
  }

  //Movimiento
  moveUp() {
    this.topSprite.setVelocityY(-200);
    this.bottomSprite.setVelocityY(-200);

    this.bottomSprite.setAngle(this.movementDir);
  }
  moveDown() {
    this.topSprite.setVelocityY(200);
    this.bottomSprite.setVelocityY(200);

    this.bottomSprite.setAngle(this.movementDir);
  }
  moveLeft() {
    this.topSprite.setVelocityX(-200);
    this.bottomSprite.setVelocityX(-200);

    this.bottomSprite.setAngle(this.movementDir);
  }
  moveRight() {
    this.topSprite.setVelocityX(200);
    this.bottomSprite.setVelocityX(200);
    this.bottomSprite.setAngle(this.movementDir);
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

  //Movimiento del cañon
  aimLeft() {
    this.aim = this.topSprite.angle - 5;
    this.topSprite.setAngle(this.aim);
    console.log(this.aim);
  }
  aimRight() {
    this.aim = this.topSprite.angle + 5;
    this.topSprite.setAngle(this.aim);
    console.log(this.aim);
  }
  shoot() {
    if (game.getTime() >= this.lastShot + this.fireRate) {
      this.lastShot = game.getTime();

      var bullet = this.bullets.get();

      if (bullet) {
        bullet.fire(
          this.topSprite.width * 0.03 * Math.cos((this.aim * Math.PI) / 180) + this.topSprite.x,
          this.topSprite.width * 0.03 * Math.sin((this.aim * Math.PI) / 180) + this.topSprite.y,
          this.aim
        );
      }
    }
  }

  getHit() {
    this.healthPoints -= 17;
    console.log(this.healthPoints);
  }
}
