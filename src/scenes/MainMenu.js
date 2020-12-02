class MainMenu extends Phaser.Scene {
  constructor() {
    super({ key: "MainMenu" });
    console.log("MainMenu#constructor");
  }

  init() {
    console.log("MainMenu#init");
  }

  preload() {
    this.load.image("sky", "../assets/sky.png");
    this.load.image("platform", "../assets/platform.png");
    this.load.image("bomb", "../assets/bomb.png");
    this.load.image("star", "../assets/star.png");
  }

  create() {
    this.add.image(400, 300, "sky");
    let title = this.add.text(90,this.game.renderer.height *1.5/ 5,"TANKATS",{font: "150px"});

    //Boton de buscar partida
    let findGameButton = this.add.image(
      this.game.renderer.width / 2,
      this.game.renderer.height *3/ 5,
      "platform"
    );

    findGameButton.setInteractive();
    findGameButton.on("pointerover", () => {
      findGameButton.setTint(0x00a0af);
    });
    findGameButton.on("pointerout", () => {
      findGameButton.setTint();
    });
    findGameButton.on("pointerdown", () => {
      this.scene.start("CharacterSelection");
      this.scene.pause("MainMenu");
    });


    //Boton de buscar partida
    let credits = this.add.image(
      this.game.renderer.width / 2,
      this.game.renderer.height *3.5/ 5,
      "platform"
    );
    credits.scale = 0.5;

    credits.setInteractive();
    credits.on("pointerover", () => {
      credits.setTint(0x00a0af);
    });
    credits.on("pointerout", () => {
      credits.setTint();
    });
    credits.on("pointerdown", () => {
      //TODO: hacer credits scene
    });

    //Boton de configuracion
    let configButton = this.add.image(
      this.game.renderer.width / 10,
      this.game.renderer.height *8.5/ 10,
      "bomb"
    );
    configButton.scale =6;

    configButton.setInteractive();
    configButton.on("pointerover", () => {
      configButton.setTint(0x00a0af);
    });
    configButton.on("pointerout", () => {
      configButton.setTint();
    });
    configButton.on("pointerdown", () => {

      this.scene.start("ConfigMenu");
    });
  }

  update() {
    console.log("SimpleScene#update");
  }
}
