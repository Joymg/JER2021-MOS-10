class VictoryScene extends Phaser.Scene {
  constructor() {
    super({ key: "VictoryScene" });
    this.winner;
  }

  init(data) {
    this.winner = data.winner.id;
  }

  create() {
    //Si se ha elegido el modo local
    if (game.config.localMode) {
      //añade el jugador que ha ganado
      if (this.winner ==1) {
        var victory = this.add.image(this.game.renderer.width/2,this.game.renderer.height*2/5,"VictoryJ1").setScale(0);
      }
      else if(this.winner==2){
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
      .image(this.game.renderer.width / 2, (this.game.renderer.height * 3) / 5, "Purple_TextBox")
      .setScale(0)
      .setActive(false)
      .setVisible(false);

    rematchButton.setInteractive();

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
    let mainMenuButton = this.add.image(
      this.game.renderer.width / 2,
      (this.game.renderer.height * 4) / 5,
      "Pink_TextBox")
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

        //animacion de entrada
        this.tweens.add({
          targets: [rematchButton, mainMenuButton],
          scale: 0.2,
          ease: "elastic",
          duration: 100,
        });
      },
    });

    this.tweens.add({
      targets: [victory],
      scale: .4,
      ease: "easein",
      duration: 100,
    });
  }
}
