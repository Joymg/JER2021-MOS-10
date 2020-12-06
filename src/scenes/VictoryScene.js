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
      var playerText = this.add.text(100, 100, "Player " + this.winner, { font: "75px" });
      playerText.setScale(0.01);
    }
    //texto de victoria
    var victoryText = this.add.text(60, 150, "Victory!!", { font: "150px" });
    victoryText.setScale(0.01);

    //boton de rematch
    let rematchButton = this.add
      .image(this.game.renderer.width / 2, this.game.renderer.height / 2, "platform")
      .setActive(false)
      .setVisible(false)
      .setScale(0.01);

    rematchButton.setInteractive();

    //efectos al pasar el raton por encima
    rematchButton.on("pointerover", () => {
      rematchButton.setTint(0x00a0af);
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
      .image(this.game.renderer.width / 2, (this.game.renderer.height * 3) / 5, "platform")
      .setActive(false)
      .setVisible(false)
      .setScale(0.01);

    mainMenuButton.setInteractive();
    //efectos al pasar el raton por encima
    mainMenuButton.on("pointerover", () => {
      mainMenuButton.setTint(0x00a0af);
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
          scale: 1,
          ease: "elastic",
          duration: 100,
        });
      },
    });

    this.tweens.add({
      targets: [victoryText, playerText],
      scale: 1,
      ease: "easein",
      duration: 100,
    });
  }
}
