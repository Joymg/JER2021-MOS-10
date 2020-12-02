class SettingsMenu extends Phaser.Scene {
  constructor() {
    super({ key: "ConfigMenu" });
    console.log("ConfigMenu#constructor");
  }

  init() {
    console.log("ConfigMenu#init");
  }

  preload() {
    this.load.image("sky", "../assets/sky.png");
    this.load.image("back", "../assets/star.png");
    this.load.image("muteUp", "../assets/muteUp.png");
    this.load.image("muteDown", "../assets/muteDown.png");
  }

  create() {
    var title = this.add.text(
      (this.game.renderer.width * 0.7) / 2,
      (this.game.renderer.height * 0.5) / 5,
      "Settings",
      { font: "50px" }
    );
    title.depth = 1;

    var background = this.add.image(400, 300, "sky").setTint(0x654321);

    let muteMusicButton = this.add
      .image(
        (this.game.renderer.width * 1.6) / 2,
        (this.game.renderer.height * 1.5) / 5 + 10,
        "muteUp"
      );
      muteMusicButton.scale = 0.3;
      muteMusicButton.setInteractive();
      muteMusicButton.on("pointerdown", () => {
        this.game.sound.mute = !this.game.sound.mute;
        if (this.game.sound.mute) {
          muteMusicButton.setTexture("muteDown");
        } else {
          muteMusicButton.setTexture("muteUp");
        }
      });

    var muteMusicText = this.add.text(
      (this.game.renderer.width * 0.2) / 2,
      (this.game.renderer.height * 1.5) / 5,
      "Mute Music:",
      { font: "40px" }
    );
    muteMusicText.depth = 1;



    /*let muteSEButton = this.add.image(
      (this.game.renderer.width * 1.6) / 2,
      (this.game.renderer.height * 2.25) / 5 + 10,
      "muteUp"
    );
    muteSEButton.scale = 0.3;
    muteSEButton.setInteractive();
    muteSEButton.on("pointerdown", () => {
        this.game.sound.mute = !this.game.sound.mute;
        if (this.game.sound.mute) {
          muteSEButton.setTexture("muteDown");
        } else {
          muteSEButton.setTexture("muteUp");
        }
      });
        var muteSEText = this.add.text(
      (this.game.renderer.width * 0.2) / 2,
      (this.game.renderer.height * 2.25) / 5,
      "Mute Sound Effects:",
      { font: "40px" }
    );
    muteSEText.depth = 1;*/


    var languageText = this.add.text(
      (this.game.renderer.width * 0.2) / 2,
      (this.game.renderer.height * 3) / 5,
      "Language:",
      { font: "40px" }
    );
    languageText.depth = 1;

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

  update() {
    console.log("ConfigMenu#update");
  }
}
