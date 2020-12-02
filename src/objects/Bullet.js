class Bullet extends Phaser.Physics.Arcade.Sprite{
  constructor(scene,xPos, yPos, angle) {
    super(scene,xPos,yPos,"bulletSprite")
    this.pos = {
      x: xPos,
      y: yPos,
    };
    this.angle = angle;
  }

  fire(x, y, angle) {
    this.setActive(true);
    this.setVisible(true);

    //  Bullets fire from the middle of the screen to the given x/y
    this.setPosition(x, y);

    this.setRotation(angle);

    this.pos.x = Math.cos(angle);
    this.pos.y = Math.sin(angle);
  }
  update(){
    this.x -= this.pos.x * (this.speed );
    this.y -= this.pos.y * (this.speed );
  }
}
