class SettingsMenu extends Phaser.Scene {
  constructor() {
    super({
      key: "ConfigMenu",
    });
    //console.log("ConfigMenu#constructor");
  }

  preload() {}

  create() {
    var background = this.add.image(
      this.game.renderer.width / 2,
      this.game.renderer.height / 2,
      "backSelec"
    );
    var title = this.add
      .image(this.game.renderer.width / 3.3, this.game.renderer.height * 0.2, "settingsTitle")
      .setScale(0.5);
    var sMusica = this.add
      .image(this.game.renderer.width / 3.3, this.game.renderer.height * 0.5, "settingsMusica")
      .setScale(0.3);
    var sIdioma = this.add
      .image(this.game.renderer.width / 3.3, this.game.renderer.height * 0.8, "settingsIdioma")
      .setScale(0.3);
    var sESP = this.add
      .image(this.game.renderer.width / 1.4, this.game.renderer.height * 0.8, "settingsESP")
      .setScale(0.2)
      .setTint(0x404040);
    var sENG = this.add
      .image(this.game.renderer.width / 1.2, this.game.renderer.height * 0.8, "settingsENG")
      .setScale(0.2)
      .setTint(0x404040);

    let muteMusicButton;
    if (this.game.sound.mute) {
      muteMusicButton = this.add.image(
        this.game.renderer.width / 1.3,
        this.game.renderer.height * 0.5,
        "muteDown"
      );
    } else {
      muteMusicButton = this.add.image(
        this.game.renderer.width / 1.3,
        this.game.renderer.height * 0.5,
        "muteUp"
      );
    }
    muteMusicButton.setScale(0.1);
    muteMusicButton.setInteractive();
    muteMusicButton.on("pointerover", () => {
      muteMusicButton.setScale(0.12);
    });
    muteMusicButton.on("pointerout", () => {
      muteMusicButton.setScale(0.1);
    });
    muteMusicButton.on("pointerdown", () => {
      this.game.sound.mute = !this.game.sound.mute;
      if (this.game.sound.mute) {
        muteMusicButton.setTexture("muteUp");
      } else {
        muteMusicButton.setTexture("muteDown");
      }
    });

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

    if (ready) {
      var timer = this.time.addEvent({
        delay: 500, // ms
        callback: checkServer,
        loop: true,
      });
    }
  }
}
