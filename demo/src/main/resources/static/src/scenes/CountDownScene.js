class CountDownScene extends Phaser.Scene{
    constructor(){
        super({
            key: "CountDownScene"
        })
    }

    create(){
        if (ready) {
            var timer = this.time.addEvent({
              delay: 800, // ms
              callback: checkServer,
              loop: true,
            });
          }
        this.scene.pause("GameplayScene");
        var three = this.add.image(this.game.renderer.width/2,this.game.renderer.height/2,"Three").setScale(0);
        var two = this.add.image(this.game.renderer.width/2,this.game.renderer.height/2,"Two").setScale(0).setVisible(false);
        var one = this.add.image(this.game.renderer.width/2,this.game.renderer.height/2,"One").setScale(0).setVisible(false);
        var miau = this.add.image(this.game.renderer.width/2,this.game.renderer.height/2,"Miau").setScale(0).setVisible(false);

        this.tweens.add({
            targets: three,
            scale: 0.8,
            duration:100,
        });
        this.tweens.add({
            targets: three,
            delay: 800,
            scale: 10,
            duration:100,
            onComplete:()=>{
                three.setVisible(false);
            }
        });


        two.setVisible(true);
        this.tweens.add({
            targets: two,
            delay:1000,
            scale: 0.8,
            duration:100,
        });
        this.tweens.add({
            targets: two,
            delay: 1800,
            scale: 10,
            duration:100,
            onComplete:()=>{
                two.setVisible(false);
            }
            
        });
        

        one.setVisible(true);
        this.tweens.add({
            targets: one,
            delay:2000,
            scale: 0.8,
            duration: 100,
        });
        this.tweens.add({
            targets: one,
            delay: 2800,
            scale: 10,
            duration: 100,
            onComplete:()=>{
                one.setVisible(false);
                this.scene.resume("GameplayScene");
            }
        });
        
        miau.setVisible(true);
        this.tweens.add({
            targets: miau,
            delay: 3000,
            scale: 2,
            duration: 1000,
            onComplete:()=>{
                miau.setVisible(false);
                this.scene.resume("GameplayScene");

            }
        });
        
       
    }
}