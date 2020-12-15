class PauseMenu extends Phaser.Scene {
  constructor() {
    super({ key: "PauseMenu" });

    this.paused;
  }

  create() {
    var background = this.add
      .image(this.game.renderer.width / 2, this.game.renderer.height / 2, "backSelec")
      .setScale(0.8);

    this.paused = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ESC);
   

    let muteMusicButton;
    if (this.game.sound.mute) {
      muteMusicButton = this.add.image(
        (this.game.renderer.width * 1.6) / 2,
        (this.game.renderer.height * 1.5) / 5 + 10,
        "muteUp"
      );
    } else {
      muteMusicButton = this.add.image(
        (this.game.renderer.width * 1.6) / 2,
        (this.game.renderer.height * 2) / 5 + 10,
        "muteDown"
      );
    }
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

    var muteMusicText = this.add
      .text(
        (this.game.renderer.width * 0.7) / 2,
        (this.game.renderer.height * 2) / 5,
        "Mute Music:",
        { font: "40px" }
      )
      .setOrigin(0.5);

    let backToMenuButton = this.add.image(
      this.game.renderer.width / 2,
      (this.game.renderer.height * 7) / 10,
      "Pink_TextBox"
    );
    backToMenuButton.setScale(0.3);

    backToMenuButton.setInteractive();
    backToMenuButton.on("pointerover", () => {
      backToMenuButton.setTint(0x909090);
      backToMenuButton.setScale(0.32);
    });
    backToMenuButton.on("pointerout", () => {
      backToMenuButton.setTint();
      backToMenuButton.setScale(0.3);
    });
    backToMenuButton.on("pointerdown", () => {
      this.scene.stop("GameplayScene");
      this.scene.stop();
      this.sound.get("BattleMusic").stop();
      this.scene.start("MainMenu");
    });

    let backButton = this.add.image(
      (this.game.renderer.width * 8) / 10,
      (this.game.renderer.height * 2) / 10,
      "Button_Back"
    );
    backButton.setScale(0.3);

    backButton.setInteractive();
    backButton.on("pointerover", () => {
      backButton.setTint(0x909090);
      backButton.setScale(0.32);
    });
    backButton.on("pointerout", () => {
      backButton.setTint();
      backButton.setScale(0.3);
    });
    backButton.on("pointerdown", () => {
      this.exit();
    });
  }

  update(){
    if (this.paused.isDown) {
      this.exit();
    }
  }
  
  exit() {
    this.scene.resume("GameplayScene");
    this.scene.stop();
  }
}
