class BulletPlayer2 extends Phaser.Physics.Arcade.Sprite {
  constructor(scene, xPos, yPos, angle) {
    super(scene, xPos, yPos, "bulletPlayer2");
    this.setScale(0.05);
    this.angle = angle;
  
    this.inicialX = 0;
    this.inicialY = 0;
    this.bounces = 2;

    this.speed =250;

  }

  fire(x, y, angle) {
    this.setActive(true);
    this.setVisible(true);

    //  Bullets fire from the middle of the screen to the given x/y
    this.setPosition(x, y);

    this.setRotation(angle*Math.PI/180);
    
    this.inicialX = Math.cos(angle*Math.PI/180);
    this.inicialY = Math.sin(angle*Math.PI/180);
    this.setVelocityX(this.speed*this.inicialX);
    this.setVelocityY(this.speed*this.inicialY);
    
  }

  bounce(){
    this.bounces-=1;
    if (this.bounces == 0) {
      this.destroy();
    }
    console.log(this.bounces);
  }

}
