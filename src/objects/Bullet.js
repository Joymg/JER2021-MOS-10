class Bullet extends Phaser.Physics.Arcade.Sprite {
  constructor(scene, xPos, yPos, angle) {
    super(scene, xPos, yPos, "bulletSprite");
    this.angle = angle;
  
    this.inicialX = 0;
    this.inicialY = 0;
    this.lifespan = 0;

    this.speed =100;

  }

  fire(x, y, angle) {
    this.setActive(true);
    this.setVisible(true);

    //  Bullets fire from the middle of the screen to the given x/y
    this.setPosition(x, y);

    this.setRotation(angle);
    console.log(this.angle,this.rotation);
    
    this.inicialX = Math.cos(angle*Math.PI/180);
    this.inicialY = Math.sin(angle*Math.PI/180);
  }

  update() {

    this.setVelocityX(this.speed*this.inicialX);
    this.setVelocityY(this.speed*this.inicialY);
  }
}
