class CreditsScene extends Phaser.Scene {
  constructor() {
    super({ key: "CreditsScene" });
    this.text;
  }

  create() {
    var background = this.add
      .image(this.game.renderer.width / 2, this.game.renderer.height / 2, "sky")
      .setScale(1.5);

    var title = this.add
      .text(this.game.renderer.width / 2, (this.game.renderer.height * 0.5) / 5, "Credits", {
        font: "50px",
      })
      .setOrigin(0.5);

    var schair = this.add
      .text((this.game.renderer.width * 1) /6, (game.renderer.height * 1.5) / 5, "Schair Álvarez \n    Maniega", {
        font: "20px",
      })
      .setOrigin(0.5);
    var andrea = this.add
      .text(
        (this.game.renderer.width * 3) / 6,
        (game.renderer.height * 1.5) / 5,
        "Andrea María \nHodas Tortosa",
        {
          font: "20px",
        }
      )
      .setOrigin(0.5);
    var joy = this.add
      .text(
        (this.game.renderer.width * 5) / 6,
        (game.renderer.height * 1.5) / 5,
        "Jose Márquez\n   García",
        {
          font: "20px",
        }
      )
      .setOrigin(0.5);
    var alberto = this.add
      .text(
        (this.game.renderer.width * 2) / 6,
        (game.renderer.height * 3.25) / 5,
        "Alberto Sánchez \n    Romero",
        {
          font: "20px",
        }
      )
      .setOrigin(0.5);
    var marta = this.add
      .text(
        (this.game.renderer.width * 4) / 6,
        (game.renderer.height * 3.25) / 5,
        "Marta Vidal \n  Gonzalez",
        {
          font: "20px",
        }
      )
      .setOrigin(0.5);

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
  }
}
