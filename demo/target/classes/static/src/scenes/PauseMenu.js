class PauseMenu extends Phaser.Scene {
  constructor() {
    super({ key: "PauseMenu" });

    this.paused;
  }

  create() {
    var background = this.add
      .image(this.game.renderer.width / 2, this.game.renderer.height / 2, "MarcoPausa")
      .setScale(1);

    this.paused = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ESC);

    let muteMusicButton;
    if (this.game.sound.mute) {
      muteMusicButton = this.add.image(
        (this.game.renderer.width * 1.4) / 2,
        (this.game.renderer.height * 2) / 5,
        "muteDown"
      );
    } else {
      muteMusicButton = this.add.image(
        (this.game.renderer.width * 1.4) / 2,
        (this.game.renderer.height * 2) / 5,
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

    var muteMusicText = this.add
      .image(
        (this.game.renderer.width * 0.7) / 2,
        (this.game.renderer.height * 2) / 5,
        "settingsMusica"
      )
      .setScale(0.3);

    let backToMenuButton = this.add
      .image(this.game.renderer.width / 2, (this.game.renderer.height * 8) / 10, "Pink_TextBox")
      .setScale(0.3);
    let backToMenuText = this.add
      .image(this.game.renderer.width / 2, (this.game.renderer.height * 8) / 10, "IrAlTitulo")
      .setScale(0.3);

    backToMenuButton.setInteractive();
    backToMenuButton.on("pointerover", () => {
      backToMenuButton.setTint(0x909090);
      backToMenuButton.setScale(0.32);
      backToMenuText.setScale(0.32);
    });
    backToMenuButton.on("pointerout", () => {
      backToMenuButton.setTint();
      backToMenuButton.setScale(0.3);
      backToMenuText.setScale(0.3);
    });
    backToMenuButton.on("pointerdown", () => {
      connection.close();
      this.scene.stop("GameplayScene");
      this.scene.stop();
      this.sound.get("BattleMusic").stop();
      this.scene.start("MainMenu");
    });

    let backButton = this.add.image(
      (this.game.renderer.width * 8.9) / 10,
      (this.game.renderer.height * 1.7) / 10,
      "Button_Back"
    );
    backButton.setScale(0.25);

    backButton.setInteractive();
    backButton.on("pointerover", () => {
      backButton.setTint(0x909090);
      backButton.setScale(0.27);
    });
    backButton.on("pointerout", () => {
      backButton.setTint();
      backButton.setScale(0.25);
    });
    backButton.on("pointerdown", () => {
      this.exit();
    });

  }

  update() {
    if (this.paused.isDown) {
      this.exit();
    }
  }

  exit() {
    this.scene.resume("GameplayScene");
    this.scene.launch("CountDownScene");
    this.scene.stop();
  }
}
