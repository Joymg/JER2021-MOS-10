class Character {
  constructor(name, id, startAngle, topSprite, bottomSprite, bullets, emitter, emitter2) {
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


    this.maxHP = 100;
    this.healthPoints = this.maxHP;
    this.dmgTakenOnHit =17;
    this.bullets = bullets;

    this.emitter = emitter;
    this.emitter2 = emitter2;

    this.velocity = 200;
    this.shield = 0;
  }

  //Movimiento
  moveUp() {
    this.topSprite.setVelocityY(-this.velocity);
    this.bottomSprite.setVelocityY(-this.velocity);
    
    this.bottomSprite.setAngle(this.movementDir);
  }
  moveDown() {
    this.topSprite.setVelocityY(this.velocity);
    this.bottomSprite.setVelocityY(this.velocity);

    this.bottomSprite.setAngle(this.movementDir);
  }
  moveLeft() {
    this.topSprite.setVelocityX(-this.velocity);
    this.bottomSprite.setVelocityX(-this.velocity);

    this.bottomSprite.setAngle(this.movementDir);
  }
  moveRight() {
    this.topSprite.setVelocityX(this.velocity);
    this.bottomSprite.setVelocityX(this.velocity);
    this.bottomSprite.setAngle(this.movementDir);
  }
  stopX() {
    this.topSprite.setVelocityX(0);
    this.bottomSprite.setVelocityX(0);
  }
  updateTopSide() {
    this.topSprite.setX(this.bottomSprite.x);
    this.topSprite.setY(this.bottomSprite.y);
    this.emitter.setPosition(this.bottomSprite.x, this.bottomSprite.y);
    this.emitter2.setPosition(this.bottomSprite.x, this.bottomSprite.y);
  }
  stopY() {
    this.topSprite.setVelocityY(0);
    this.bottomSprite.setVelocityY(0);
  }

  //Movimiento del cañon
  aimLeft() {
    this.aim = this.topSprite.angle - 1.5;
    this.topSprite.setAngle(this.aim);
    //console.log(this.aim);
  }
  aimRight() {
    this.aim = this.topSprite.angle + 1.5;
    this.topSprite.setAngle(this.aim);
    //console.log(this.aim);
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
        GameManager.scene.sound.play("shot" + Math.floor(Math.random()*3+1));
      }
    }
  }

  getHit() {
    if(this.shield === 0){
      this.healthPoints -= this.dmgTakenOnHit;
      GameManager.scene.sound.play("catDamage"+ this.id)
      console.log(this.healthPoints);
    }else{
      this.shield -= 10;
    }
  }

}
