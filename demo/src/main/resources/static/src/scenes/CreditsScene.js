class CreditsScene extends Phaser.Scene {
  constructor() {
    super({
      key: "CreditsScene"
    });
    this.text;
  }

  create() {
    var background = this.add.image(
      this.game.renderer.width / 2,
      this.game.renderer.height / 2,
      "backSelec"
    );

    var title = this.add
      .image(this.game.renderer.width / 2, this.game.renderer.height * 0.1, "Creditos")
      .setScale(0.5);

    var schair = this.add
      .image((this.game.renderer.width * 1) / 6, (game.renderer.height * 1.5) / 5, "Schair")
      .setOrigin(0.5)
      .setScale(0.5);
    var schairIcon = this.add
      .image((this.game.renderer.width * 1) / 6, (game.renderer.height * 2.4) / 5, "SchairIcon")
      .setOrigin(0.5)
      .setScale(0.08);

    var andrea = this.add
      .image((this.game.renderer.width * 3) / 6, (game.renderer.height * 1.5) / 5, "Andrea")
      .setOrigin(0.5)
      .setScale(0.5);
    var andreaIcon = this.add
      .image((this.game.renderer.width * 3) / 6, (game.renderer.height * 2.4) / 5, "AndreaIcon")
      .setOrigin(0.5)
      .setScale(0.08);

    var Joy = this.add
      .image((this.game.renderer.width * 5) / 6, (game.renderer.height * 1.5) / 5, "Joy")
      .setOrigin(0.5)
      .setScale(0.5);
    var JoyIcon = this.add
      .image((this.game.renderer.width * 5) / 6, (game.renderer.height * 2.4) / 5, "JoyIcon")
      .setOrigin(0.5)
      .setScale(0.08);

    var Alberto = this.add
      .image((this.game.renderer.width * 2) / 6, (game.renderer.height * 3.2) / 5, "Alberto")
      .setOrigin(0.5)
      .setScale(0.5);
    var AlbertoIcon = this.add
      .image((this.game.renderer.width * 2) / 6, (game.renderer.height * 4.1) / 5, "AlbertoIcon")
      .setOrigin(0.5)
      .setScale(0.08);

    var Marta = this.add
      .image((this.game.renderer.width * 4) / 6, (game.renderer.height * 3.2) / 5, "Marta")
      .setOrigin(0.5)
      .setScale(0.5);
    var MartaIcon = this.add
      .image((this.game.renderer.width * 4) / 6, (game.renderer.height * 4.1) / 5, "MartaIcon")
      .setOrigin(0.5)
      .setScale(0.08);

    //Boton de atras
    let backButton = this.add.image(
      (this.game.renderer.width * 9) / 10,
      (this.game.renderer.height * 1.2) / 10,
      "Button_Back"
    );
    backButton.setScale(0.3);

    backButton.setInteractive();
    backButton.on("pointerover", () => {
      backButton.setTint(0x909090);
    });
    backButton.on("pointerout", () => {
      backButton.setTint();
    });
    backButton.on("pointerdown", () => {
      this.scene.start("MainMenu");
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