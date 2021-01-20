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
    //Si se ha elegido el modo local
    if (game.config.localMode) {
      //añade el jugador que ha ganado
      var confeti1;
      var confeti2;
      var confeti3;
      if (this.winner ==1) {

        //Confeti
        confeti1 = this.add.particles("confeti1");
        confeti2 = this.add.particles("confeti2");
        confeti3 = this.add.particles("confeti3");
        var emitter1 = confeti1.createEmitter({
        x: 200, y: -200, gravityY: 30, rotate: {min: 30, max: 240}, speed: 200,
        lifespan: { min: 5000, max: 10000 }, scale: {min: 0.1, max: 0.5 },
        blendMode: 'ADD'
        });
        var emitter2 = confeti2.createEmitter({
          x: 500, y: -200, gravityY: 30, rotate: {min: 30, max: 240}, speed: 200,
          lifespan: { min: 5000, max: 10000 }, scale: {min: 0.1, max: 0.5 },
          blendMode: 'ADD'
        });
        var emitter3 = confeti3.createEmitter({
          x: 800, y: -200, gravityY: 30, rotate: {min: 30, max: 240}, speed: 200,
          lifespan: { min: 5000, max: 10000 }, scale: {min: 0.1, max: 0.5 },
          blendMode: 'ADD'
        });

        var victory = this.add.image(this.game.renderer.width/2,this.game.renderer.height*2/5,"VictoryJ1").setScale(0);
      }
      else if(this.winner==2){

        //Confeti
        confeti1 = this.add.particles("confeti1");
        confeti2 = this.add.particles("confeti2");
        confeti3 = this.add.particles("confeti3");
        var emitter1 = confeti1.createEmitter({
          x: 200, y: -200, gravityY: 30, rotate: {min: 30, max: 240}, speed: 200,
          lifespan: { min: 5000, max: 10000 }, scale: {min: 0.1, max: 0.5 },
          blendMode: 'ADD'
          });
          var emitter2 = confeti2.createEmitter({
            x: 500, y: -200, gravityY: 30, rotate: {min: 30, max: 240}, speed: 200,
            lifespan: { min: 5000, max: 10000 }, scale: {min: 0.1, max: 0.5 },
            blendMode: 'ADD'
          });
          var emitter3 = confeti3.createEmitter({
            x: 800, y: -200, gravityY: 30, rotate: {min: 30, max: 240}, speed: 200,
            lifespan: { min: 5000, max: 10000 }, scale: {min: 0.1, max: 0.5 },
            blendMode: 'ADD'
          });
          
        var victory = this.add.image(this.game.renderer.width/2,this.game.renderer.height*2/5,"VictoryJ2").setScale(0);
      }
      /* var playerText = this.add.text(100, 100, "Player " + this.winner, { font: "75px" });
      playerText.setScale(0.01); */
    }
    //texto de victoria
    /* var victoryText = this.add.text(60, 150, "Victory!!", { font: "150px" });
    victoryText.setScale(0.01); */

    //boton de rematch
    let rematchButton = this.add
      .image(this.game.renderer.width / 2, (this.game.renderer.height * 2.9) / 5, "Purple_TextBox")
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

    //boton de vuleta la menu principal
    let mainMenuButton = this.add
      .image(this.game.renderer.width / 2, (this.game.renderer.height * 3.7) / 5, "Pink_TextBox")
      .setScale(0)
      .setActive(false)
      .setVisible(false);

    let mainMenuText = this.add
      .image(this.game.renderer.width / 2, (this.game.renderer.height * 3.7) / 5, "IrAlTitulo")
      .setScale(0)
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
      this.scene.stop("GameplayScene");
      this.scene.start("MainMenu");
    });

    rematchButton.setActive(false);
    rematchButton.setVisible(false);
    mainMenuButton.setActive(false);
    mainMenuButton.setVisible(false);

    //temporizador

    var timedActivation = this.time.addEvent({
      delay: 1000,
      callback: () => {
        //al pasar 1 segundo aparecen los botones
        rematchButton.setActive(true);
        mainMenuButton.setActive(true);
        rematchButton.setVisible(true);
        mainMenuButton.setVisible(true);
        rematchText.setVisible(true);
        mainMenuText.setVisible(true);
        this.sound.play("victorySound");
        //animacion de entrada
        this.tweens.add({
          targets: [rematchButton, rematchText, mainMenuButton, mainMenuText],
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


    if (ready) {
      var timer = this.time.addEvent({
        delay: 500, // ms
        callback: checkServer,
        loop: true,
      });
    }
  }
}
