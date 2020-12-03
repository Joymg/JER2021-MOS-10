class Character{
  constructor(name, xPos, yPos, startAngle, topSprite, bottomSprite, bullets) {
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

    this.fireRate = 100;
    this.nextFire = 0;
    this.healthPoints = 100;
    this.bullets = bullets;
  }

  //Movimiento
  moveUp() {
    this.topSprite.setVelocityY(-200);
    this.bottomSprite.setVelocityY(-200);
  }
  moveDown() {
    this.topSprite.setVelocityY(200);
    this.bottomSprite.setVelocityY(200);
  }
  moveLeft() {
    this.topSprite.setVelocityX(-200);
    this.bottomSprite.setVelocityX(-200);
  }
  moveRight() {
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

  //Movimiento del cañon
  aimLeft() {
    this.aim = this.topSprite.angle - 5;
    this.topSprite.setAngle(this.aim);
  }
  aimRight() {
    this.aim = this.topSprite.angle + 5;
    this.topSprite.setAngle(this.aim);
  }
  shoot() {
    if (game.getTime() > this.nextFire) {
      this.nextFire = game.getTime() + this.fireRate;

      var bullet = this.bullets.get();

      if (bullet) {
        bullet.fire(this.topSprite.x, this.topSprite.y, this.aim);
        this.nextFire = game.getTime() + 50;
      }
      console.log(this.aim);
    }
  }

  getHit(){
    this.healthPoints -=17;
  }
}
