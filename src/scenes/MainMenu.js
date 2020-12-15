class MainMenu extends Phaser.Scene {
  constructor() {
    super({ key: "MainMenu" });
  }

  create() {
    this.sound.add("MenuMusic");
    if (!this.sound.get("MenuMusic").isPlaying) {
      this.sound.play("MenuMusic");
    }
    var background = this.add
      .image(this.game.renderer.width / 2, this.game.renderer.height / 2, "sky")
      .setScale(1.5);
    let title = this.add.image(
      this.game.renderer.width / 2,
      (this.game.renderer.height * 2) / 5,
      "title"
    );
    title.setScale(0.6);

    //Boton de buscar partida
    let findGameButton = this.add.image(
      this.game.renderer.width / 2,
      (this.game.renderer.height * 3) / 5,
      "Purple_TextBox"
    ).setScale(.2);

    findGameButton.setInteractive();

    //efectos al pasar el raton por encima
    findGameButton.on("pointerover", () => {
      findGameButton.setTint(0x909090);
      findGameButton.setScale(.22);
    });
    findGameButton.on("pointerout", () => {
      findGameButton.setTint();
      findGameButton.setScale(.2);
    });

    //al pulsar el boton carga la escena de seleccion de personaje
    findGameButton.on("pointerdown", () => {
      var player2Turn = false;
      var p1Char = null;
      this.scene.start("CharacterSelection", { player2Turn, p1Char });
    });

    //Boton de ver creditos
    let credits = this.add.image(
      this.game.renderer.width / 2,
      (this.game.renderer.height * 3.6) / 5,
      "Pink_TextBox"
    ).setScale(.15);

    credits.setInteractive();

    //efectos al pasar el raton por encima
    credits.on("pointerover", () => {
      credits.setTint(0x909090);
      credits.setScale(.17);
    });
    credits.on("pointerout", () => {
      credits.setTint();
      credits.setScale(.15);
    });
    credits.on("pointerdown", () => {
      this.scene.start("CreditsScene");
    });

    //Boton de configuracion
    let configButton = this.add.image(
      (this.game.renderer.width * 0.8) / 10,
      (this.game.renderer.height * 9) / 10,
      "Button_Config"
    );
    configButton.setScale(0.3);

    configButton.setInteractive();
    //efectos al pasar el raton por encima
    configButton.on("pointerover", () => {
      configButton.setTint(0x909090);
      configButton.setScale(.32);
    });
    configButton.on("pointerout", () => {
      configButton.setTint();
      configButton.setScale(.3);
    });
    //al pulsar el boton carga la escena de configuracion
    configButton.on("pointerdown", () => {
      this.scene.start("ConfigMenu");
    });
  }
}
