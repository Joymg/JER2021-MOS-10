class PauseMenu extends Phaser.Scene {
  constructor() {
    super({ key: "PauseMenu" });
    console.log("PauseMenu#constructor");
  }

  init() {
    console.log("PauseMenu#init");
  }

  preload() {
    this.load.image("sky", "../assets/sky.png");
    this.load.image("back", "../assets/star.png");
  }

  create() {
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
    console.log("PauseMenu#update");
  }
}
