class MainMenu extends Phaser.Scene {
  constructor() {
    super({ key: "MainMenu" });
  }

  create() {
    var background = this.add
      .image(this.game.renderer.width / 2, this.game.renderer.height / 2, "sky")
      .setScale(1.6);
    let title = this.add.image(
      this.game.renderer.width / 2,
      (this.game.renderer.height * 2) / 5,
      "title"
    );
    title.setScale(0.4);

    //Boton de buscar partida
    let findGameButton = this.add.image(
      this.game.renderer.width / 2,
      (this.game.renderer.height * 3) / 5,
      "platform"
    );

    findGameButton.setInteractive();

    //efectos al pasar el raton por encima
    findGameButton.on("pointerover", () => {
      findGameButton.setTint(0x00a0af);
    });
    findGameButton.on("pointerout", () => {
      findGameButton.setTint();
    });

    //al pulsar el boton carga la escena de seleccion de personaje
    findGameButton.on("pointerdown", () => {
      var player2Turn = false;
      var p1Char = null;
      this.scene.start("CharacterSelection", { player2Turn, p1Char });
    });

    //Boton de buscar partida
    let credits = this.add.image(
      this.game.renderer.width / 2,
      (this.game.renderer.height * 3.5) / 5,
      "platform"
    );
    credits.scale = 0.5;

    credits.setInteractive();
    //efectos al pasar el raton por encima
    credits.on("pointerover", () => {
      credits.setTint(0x00a0af);
    });
    credits.on("pointerout", () => {
      credits.setTint();
    });
    credits.on("pointerdown", () => {
      this.scene.start("CreditsScene");
    });

    //Boton de configuracion
    let configButton = this.add.image(
      (this.game.renderer.width * 1.2) / 10,
      (this.game.renderer.height * 8.5) / 10,
      "Button_Config"
    );

    configButton.setScale(0.3);

    configButton.setInteractive();
    //efectos al pasar el raton por encima
    configButton.on("pointerover", () => {
      configButton.setTint(0x00a0af);
    });
    configButton.on("pointerout", () => {
      configButton.setTint();
    });
    //al pulsar el boton carga la escena de configuracion
    configButton.on("pointerdown", () => {
      this.scene.start("ConfigMenu");
    });
  }
  update() {}
}
