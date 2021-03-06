class MainMenu extends Phaser.Scene {
  constructor() {
    super({ key: "MainMenu" });
  }

  create() {
    if (!this.sound.get("MenuMusic").isPlaying) {
      this.sound.get("MenuMusic").play();
    }
    var background = this.add
      .image(this.game.renderer.width / 2, this.game.renderer.height / 2, "backTankats")
      .setScale(1.5);

    var particles1 = this.add.particles("emitter1");

    var emitter1 = particles1.createEmitter({
      x: 446,
      y: -300,
      gravityY: 30,
      rotate: { min: 30, max: 240 },
      speed: 200,
      lifespan: { min: 5000, max: 10000 },
      scale: { min: 0.1, max: 0.5 },
      blendMode: "ADD",
    });

    var particles2 = this.add.particles("emitter2");

    var emitter2 = particles2.createEmitter({
      x: 646,
      y: -300,
      gravityY: 30,
      rotate: { min: 30, max: 240 },
      speed: 200,
      lifespan: { min: 5000, max: 10000 },
      scale: { min: 0.1, max: 0.5 },
      blendMode: "ADD",
    });

    let title = this.add.image(
      this.game.renderer.width / 2,
      (this.game.renderer.height * 1.5) / 5,
      "title"
    );
    title.setScale(0.6);

    //Boton de buscar partida
    let findGameButton = this.add
      .image(this.game.renderer.width / 2, (this.game.renderer.height * 2.8) / 5, "Multi")
      .setScale(0.28);

    findGameButton.setInteractive();

    //efectos al pasar el raton por encima
    findGameButton.on("pointerover", () => {
      findGameButton.setTint(0x909090);
      findGameButton.setScale(0.25);
    });
    findGameButton.on("pointerout", () => {
      findGameButton.setTint();
      findGameButton.setScale(0.28);
    });

    //al pulsar el boton carga la escena de seleccion de personaje
    findGameButton.on("pointerdown", () => {
      var player2Turn = false;
      var p1Char = null;
      this.scene.start("GameFinder", { player2Turn, p1Char });
    });


    let localGameButton = this.add
      .image(this.game.renderer.width / 2, (this.game.renderer.height * 3.6) / 5, "Local")
      .setScale(0.28);

      localGameButton.setInteractive();

    //efectos al pasar el raton por encima
    localGameButton.on("pointerover", () => {
      localGameButton.setTint(0x909090);
      localGameButton.setScale(0.25);
    });
    localGameButton.on("pointerout", () => {
      localGameButton.setTint();
      localGameButton.setScale(0.28);
    });

    //al pulsar el boton carga la escena de seleccion de personaje
    localGameButton.on("pointerdown", () => {
      var player2Turn = false;
      var p1Char = null;
		game.config.localMode = true;
      this.scene.start("CharacterSelection", { player2Turn, p1Char });
    });

    //Boton de ver creditos
    let credits = this.add
      .image(this.game.renderer.width / 2, (this.game.renderer.height * 4.5) / 5, "Creditos")
      .setScale(0.3);

    credits.setInteractive();

    //efectos al pasar el raton por encima
    credits.on("pointerover", () => {
      credits.setTint(0x909090);
      credits.setScale(0.32);
    });
    credits.on("pointerout", () => {
      credits.setTint();
      credits.setScale(0.3);
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
      configButton.setScale(0.32);
    });
    configButton.on("pointerout", () => {
      configButton.setTint();
      configButton.setScale(0.3);
    });

    //al pulsar el boton carga la escena de configuracion
    configButton.on("pointerdown", () => {
      this.scene.start("ConfigMenu");
    });
    //}

    if (ready) {
      var timer = this.time.addEvent({
        delay: 500, // ms
        callback: checkServer,
        loop: true,
      });
    }
  }
}

