class BulletGroup extends Phaser.Physics.Arcade.Group{
    constructor(scene){
        super(scene.physics.world,scene);
    
        this.createMultiple({
            classType: Bullet,
            frameQuantity: 30,
            active: false,
            visible: false,
            key: "bullet"
        })
    }

    shootBullet(x,y,angle){
        const bullet = this.getFirstDead(false);
        if (bullet) {
            bullet.fire(x,y,angle);
        }
    }
}