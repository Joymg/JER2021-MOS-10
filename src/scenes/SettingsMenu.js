class SettingsMenu extends Phaser.Scene {
  constructor() {
    super({ key: "ConfigMenu" });
    console.log("ConfigMenu#constructor");
  }

  init() {
    console.log("ConfigMenu#init");
  }

  preload() {}

  create() {
    var background = this.add
      .image(this.game.renderer.width / 2, this.game.renderer.height / 2, "sky")
      .setTint(0x987654)
      .setScale(1.5);
    var title = this.add
      .text(this.game.renderer.width / 2, (this.game.renderer.height * 0.5) / 5, "Settings", {
        font: "50px",
      })
      .setOrigin(0.5);

    let muteMusicButton = this.add.image(
      (this.game.renderer.width * 1.6) / 2,
      (this.game.renderer.height * 1.5) / 5 + 10,
      "muteUp"
    );
    muteMusicButton.setScale(0.1);
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
      this.game.renderer.height / 8,
      "Button_Back"
    );
    backButton.setScale(0.3);

    backButton.setInteractive();
    //efectos al pasar el raton por encima
    backButton.on("pointerover", () => {
      backButton.setTint(0x909090);
      backButton.setScale(0.32);

    });
    backButton.on("pointerout", () => {
      backButton.setTint();
      backButton.setScale(0.3);

    });
    //al pulsar el boton te devuelve al menu pricipal
    backButton.on("pointerdown", () => {
      this.scene.start("MainMenu");
    });
  }

  update() {
    console.log("ConfigMenu#update");
  }
}
