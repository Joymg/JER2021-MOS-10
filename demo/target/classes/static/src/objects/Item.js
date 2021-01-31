class Item extends Phaser.Physics.Arcade.Sprite {
  constructor(scene, xPos, yPos, id, sprite, duration) {
    super(scene, xPos, yPos, sprite);
    this.scene = scene;
    this.xPos = xPos;
    this.yPos = yPos;
    this.sprite = sprite;
    this.id = id;

    this.timer;
    this.duration = duration;
    this.target;
  }

  useItem(character){
    this.target = GameManager.character;
    switch (this.id) {
      case 0:
        GameManager.character.setSpeed(SpeedPowerUp.acc)
        this.timer = this.scene.time.addEvent({
          delay: this.duration,
          callback: GameManager.character.setSpeed,
          args : [this.target.getBaseSpeed]
        })
        break;
      case 1:
        GameManager.character.setSpeed(SlowPowerUp.acc)
        this.timer = this.scene.time.addEvent({
          delay: this.duration,
          callback: GameManager.character.setSpeed,
          args : [this.target.getBaseSpeed]
        })
        break;
      case 2:
        
        break;
    }
  }
}

class SpeedPowerUp extends Item {
  constructor(scene, xPos, yPos) {
    super(scene,xPos,yPos,SpeedPowerUp.id,"SpeedUp");
    this.xPos = xPos;
    this.yPos = yPos;
    this.sprite;
    this.id = SpeedPowerUp.id;
    
  }
  static id = 0;
  static duration = 10;
  static acc =300;
}

class SlowPowerUp extends Item {
  constructor(scene, xPos, yPos) {
    super(scene,xPos,yPos,SlowPowerUp.id,"SpeedDown");
    this.xPos = xPos;
    this.yPos = yPos;
    this.sprite;
    this.id = SlowPowerUp.id;

  }
  static id = 1;
  static duration = 8;
  static acc = 200;
}

class ShieldPowerUp extends Item {
  constructor(scene, xPos, yPos) {
    super(scene,xPos,yPos,ShieldPowerUp.id,"Shield");
    this.xPos = xPos;
    this.yPos = yPos;
    this.sprite;
    this.id = ShieldPowerUp.id;
  }
  static id = 2;
}


