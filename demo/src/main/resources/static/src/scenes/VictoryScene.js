class VictoryScene extends Phaser.Scene {
  constructor() {
    super({ key: "VictoryScene" });
    this.winner;
  }

  init(data) {
    this.winner = data.winner.id;
  }

  create() {
    this.add.image(this.game.renderer.width / 2, this.game.renderer.height / 2, "MarcoPausa");

    //Imagen victoria
      var victory = this.add
        .image(this.game.renderer.width / 2, (this.game.renderer.height * 2) / 5, "Victory")
        .setScale(0);

    //Confeti
    var confeti1 = this.add.particles("confeti1");
    var confeti2 = this.add.particles("confeti2");
    var confeti3 = this.add.particles("confeti3");
    var emitter1 = confeti1.createEmitter({
      x: 200,
      y: -200,
      gravityY: 30,
      rotate: { min: 30, max: 240 },
      speed: 200,
      lifespan: { min: 5000, max: 10000 },
      scale: { min: 0.1, max: 0.5 },
      blendMode: "ADD",
    });
    var emitter2 = confeti2.createEmitter({
      x: 500,
      y: -200,
      gravityY: 30,
      rotate: { min: 30, max: 240 },
      speed: 200,
      lifespan: { min: 5000, max: 10000 },
      scale: { min: 0.1, max: 0.5 },
      blendMode: "ADD",
    });
    var emitter3 = confeti3.createEmitter({
      x: 800,
      y: -200,
      gravityY: 30,
      rotate: { min: 30, max: 240 },
      speed: 200,
      lifespan: { min: 5000, max: 10000 },
      scale: { min: 0.1, max: 0.5 },
      blendMode: "ADD",
    });

    if (game.config.localMode) {
      //boton de rematch
      let rematchButton = this.add
        .image(
          this.game.renderer.width / 2,
          (this.game.renderer.height * 2.9) / 5,
          "Purple_TextBox"
        )
        .setScale(0)
        .setActive(false)
        .setVisible(false);

      rematchButton.setInteractive();

      let rematchText = this.add
        .image(this.game.renderer.width / 2, (this.game.renderer.height * 2.9) / 5, "VolverAJugar")
        .setScale(0)
        .setActive(false)
        .setVisible(false);

      //efectos al pasar el raton por encima
      rematchButton.on("pointerover", () => {
        rematchButton.setTint(0x909090);
      });
      rematchButton.on("pointerout", () => {
        rematchButton.setTint();
      });

      //Al pulsar el boton recarga la escena de gameplay
      rematchButton.on("pointerdown", () => {
        this.scene.stop();
        this.scene.start("GameplayScene");
      });

      rematchButton.setActive(false);
      rematchButton.setVisible(false);
    }

    //boton de vuleta la menu principal
    let mainMenuButton = this.add
      .image(this.game.renderer.width / 2, (this.game.renderer.height * 3.7) / 5, "Pink_TextBox")
      .setScale(0)
      .setActive(false)
      .setVisible(false);

    let mainMenuText = this.add
      .text(this.game.renderer.width / 2.4, (this.game.renderer.height * 3.6) / 5, "Ir al título", {
      fontFamily: "Arial",
      fontSize: 200,
      color: "#000000",
    })
	  .setActive(false)
      .setVisible(false);
      
      

    mainMenuButton.setInteractive();
    //efectos al pasar el raton por encima
    mainMenuButton.on("pointerover", () => {
      mainMenuButton.setTint(0x909090);
    });
    mainMenuButton.on("pointerout", () => {
      mainMenuButton.setTint();
    });
    //al pulsar el boton te lleva al menu principal
    mainMenuButton.on("pointerdown", () => {
	if (game.config.localMode){
		this.scene.stop("GameplayScene");
      	this.scene.start("MainMenu");
	}else{
	  connection.close();
      this.scene.stop("GameplayScene");
      this.scene.start("MainMenu");
	}
    });

    mainMenuButton.setActive(false);
    mainMenuButton.setVisible(false);

    //temporizador

    var timedActivation = this.time.addEvent({
      delay: 1000,
      callback: () => {
        //al pasar 1 segundo aparecen los botones
      /* if (game.config.localMode) {
          rematchButton.setVisible(true);
          rematchText.setVisible(true);

          this.tweens.add({
            targets: [rematchButton, rematchText],
            scale: 0.2,
            ease: "elastic",
            duration: 100,
          });
        }*/
        mainMenuButton.setVisible(true);
        mainMenuText.setVisible(true);
        this.sound.play("victorySound");
        //animacion de entrada
        this.tweens.add({
          targets: [mainMenuButton, mainMenuText],
          scale: 0.2,
          ease: "elastic",
          duration: 100,
        });
      },
    });

    this.tweens.add({
      targets: [victory],
      scale: 0.4,
      ease: "easein",
      duration: 100,
    });
  }
}
