class Character {
  constructor(scene, name, id, startAngle, topSprite, bottomSprite, bullets, emitter, emitter2) {
    this.scene = scene;
    this.id = id;
    this.aim = startAngle;
    this.movementDir = this.aim;
    //this.directionValue =0;
    this.name = name;

    this.topSprite = topSprite;
    this.topSprite.setAngle(this.aim);
    this.bottomSprite = bottomSprite;
    this.bottomSprite.setAngle(0);

    this.fireRate = 300;
    this.lastShot = 0;

    this.maxHP = 100;
    this.healthPoints = this.maxHP;
    this.dmgTakenOnHit = 17;
    this.dmgTakenOnShield = 10;
    this.bullets = bullets;

    this.emitter = emitter;
    this.emitter2 = emitter2;

    this.baseSpeed = 200;
    this.speed = this.baseSpeed;
    this.maxShield = 30;
    this.shield = 0;
  }

  //Movimiento
  moveUp() {
    this.topSprite.setVelocityY(-this.speed);
    this.bottomSprite.setVelocityY(-this.speed);

    var diff = Directions.UpAnd(this.bottomSprite.body.velocity.x) - this.bottomSprite.angle;
    if (diff < -180) {
      diff -= 360;
    } else if (diff > 180) {
      diff -= 360;
    }
    this.scene.tweens.add({
      targets: this.bottomSprite,
      angle: this.bottomSprite.angle + diff,
      duration: 200,
    });
    this.movementDir = this.bottomSprite.angle;
    //console.log(this.movementDir);

    // Normalize and scale the velocity so that player can't move faster along a diagonal
    this.bottomSprite.body.velocity.normalize().scale(this.speed);
  }
  moveDown() {
    this.topSprite.setVelocityY(this.speed);
    this.bottomSprite.setVelocityY(this.speed);
    var diff = Directions.DownAnd(this.bottomSprite.body.velocity.x) - this.bottomSprite.angle;
    if (diff < -180) {
      diff -= 360;
    } else if (diff > 180) {
      diff -= 360;
    }
    this.scene.tweens.add({
      targets: this.bottomSprite,
      angle: this.bottomSprite.angle + diff,
      duration: 200,
    });
    this.movementDir = this.bottomSprite.angle;
    //console.log(this.movementDir);

    // Normalize and scale the velocity so that player can't move faster along a diagonal
    this.bottomSprite.body.velocity.normalize().scale(this.speed);
  }
  moveLeft() {
    this.topSprite.setVelocityX(-this.speed);
    this.bottomSprite.setVelocityX(-this.speed);
    this.scene.tweens.add({
      targets: this.bottomSprite,
      angle: 0,
      duration: 200,
    });
    this.movementDir = this.bottomSprite.angle;
    //console.log(this.movementDir);

    // Normalize and scale the velocity so that player can't move faster along a diagonal
    this.bottomSprite.body.velocity.normalize().scale(this.speed);
  }
  moveRight() {
    this.topSprite.setVelocityX(this.speed);
    this.bottomSprite.setVelocityX(this.speed);

    var diff =  Directions.RightAnd(this.bottomSprite.body.velocity.y) - this.bottomSprite.angle;
    if (diff < -180) {
      diff -= 360;
    } else if (diff > 180) {
      diff -= 360;
    }
    //console.log(diff);
    this.scene.tweens.add({
      targets: this.bottomSprite,
      angle: this.bottomSprite.angle + diff,
      duration: 200,
    });
    this.movementDir = this.bottomSprite.angle;
    //console.log(this.movementDir);

    // Normalize and scale the velocity so that player can't move faster along a diagonal
    this.bottomSprite.body.velocity.normalize().scale(this.speed);
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
  }
  aimRight() {
    this.aim = this.topSprite.angle + 1.5;
    this.topSprite.setAngle(this.aim);
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
        GameManager.scene.sound.play("shot" + Math.floor(Math.random() * 3 + 1));
      }
    }

    //console.log(this.bottomSprite.angle);
  }

  getHit() {
    if (this.shield === 0) {
      this.healthPoints -= this.dmgTakenOnHit;
      GameManager.scene.sound.play("catDamage" + this.id);
      //console.log(this.healthPoints);
    } else {
      this.shield -= this.dmgTakenOnShield;
    }
  }

  setSpeed(value) {
    this.speed = value;
  }

  getBaseSpeed(){
    return this.baseSpeed;
  }
}
