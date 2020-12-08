class CreditsScene extends Phaser.Scene {
  constructor() {
    super({ key: "CreditsScene" });
    this.text
  }

  create() {
    var background = this.add.image(400, 300, "sky");

    var title = this.add.text(
      (this.game.renderer.width ) / 2,
      (this.game.renderer.height * 0.5) / 5,
      "Credits",
      { font: "50px" }
    ).setOrigin(0.5);

    var schair = this.add.text(50, (game.renderer.height*1.5)/5, "Schair Álvarez \n    Maniega", {
      font: "20px",
    });
    var andrea = this.add.text(330,(game.renderer.height*1.5)/5, "Andrea María \nHodas Tortosa", {
      font: "20px",
    });
    var joy = this.add.text(580, (game.renderer.height*1.5)/5, "Jose Márquez\n   García", { font: "20px" });
    var alberto = this.add.text(150, (game.renderer.height*3)/5, "Alberto Sánchez \n    Romero", {
      font: "20px",
    });
    var marta = this.add.text(500, (game.renderer.height*3)/5, "Marta Vidal \n  Gonzalez", { font: "20px" });

    //Boton de atras
    let backButton = this.add.image(
        (this.game.renderer.width * 9) / 10,
        this.game.renderer.height / 10,
        "back"
      );
      backButton.scale = 3;
  
      backButton.setInteractive();
      backButton.on("pointerover", () => {
        backButton.setTint(0x00a0af);
      });
      backButton.on("pointerout", () => {
        backButton.setTint();
      });
      backButton.on("pointerdown", () => {
        this.scene.start("MainMenu");
      });
  }
}
