class Loader extends Phaser.Scene {
  constructor() {
    super({ key: "Loader" });
    this.logo;
  }
  preload() {
    var progressBar = this.add.graphics();
    var progressBox = this.add.graphics();
    progressBox.fillStyle(0x222222, 0.8);
    progressBox.fillRect(240, 270, 540, 50);

    var loadingText = this.make.text({
      x: game.renderer.width / 2,
      y: game.renderer.height / 2 - 50,
      text: "Loading...",
      style: {
        font: "20px monospace",
        fill: "#ffffff",
      },
    });
    loadingText.setOrigin(0.5, 0.5);

    var percentText = this.make.text({
      x: game.renderer.width / 2,
      y: game.renderer.height / 2 - 5,
      text: "0%",
      style: {
        font: "18px monospace",
        fill: "#ffffff",
      },
    });

    this.load.on("progress", function (value) {
      console.log(value);
      progressBar.clear();
      progressBar.fillStyle(0xffffff, 1);
      progressBar.fillRect(250, 280, 520 * value, 30);

      percentText.setText(parseInt(value * 100) + "%");
    });
    percentText.setOrigin(0.5, 0.5);

    //Elementos del menuPrincipal
    this.load.image("sky", "../assets/sky.png");
    this.load.image("platform", "../assets/platform.png");
    this.load.image("bomb", "../assets/bomb.png");
    this.load.image("star", "../assets/star.png");
    this.load.image("title", "../assets/TANKATS.png");

    //Botones 
    this.load.image("Button_Back", "../assets/Botones/Button_Back.png");
    this.load.image("Button_Config", "../assets/Botones/Button_Config.png");
    this.load.image("Button_Left", "../assets/Botones/Button_Left.png");
    this.load.image("Button_Right", "../assets/Botones/Button_Right.png");

    //Personajes
    this.load.image("topSprite", "../assets/characters/catsudonTopSprite.png");
    this.load.image("bottomSprite", "../assets/characters/1_Tanque_ParteAbajo.png");

    //Balas
    this.load.image("bulletPlayer1", "../assets/Balas/Bala_Jugador1.png");
    this.load.image("bulletPlayer2", "../assets/Balas/Bala_Jugador2.png");

    //elementos de la pantalal de configuracion
    this.load.image("back", "../assets/star.png");
    this.load.image("muteUp", "../assets/muteUp.png");
    this.load.image("muteDown", "../assets/muteDown.png");
    

    //elementos de la seleccion de personaje
    this.load.image("sky", "../assets/sky.png");
    this.load.image("ready", "../assets/platform.png");
    this.load.image("back", "../assets/star.png");
    this.load.image("Aricato", "/assets/card.png");
    this.load.image("Catsudon", "/assets/card.png");
    this.load.image("Tankitty", "/assets/card.png");
    this.load.image("Catígula", "/assets/card.png");
    this.load.image("Catótico", "/assets/card.png");
    this.load.image("arrow", "/assets/bomb.png");

    //elementos del gameplay
    /* this.load.image("bottomSprite", "../assets/star.png");
    this.load.image("topSprite", "../assets/platform.png");
    this.load.image("bulletSprite", "../assets/bullet.png"); */
    this.load.image("woodenCrateSprite", "../assets/WoodenObstacle.png");
    this.load.image("ironCrateSprite", "../assets/IronObstacle.png");
    this.load.image("pitSprite", "../assets/pit.png");

    this.load.image("floorTiles", "../assets/tilesetsuelo.png");

    this.load.on("complete", function () {
      progressBar.destroy();
      progressBox.destroy();
      loadingText.destroy();
      percentText.destroy();
    });
  }

  create() {
    this.logo = this.add.image(0, 0, "sky").setOrigin(0).setTint(0xff0000).setScale(2.3);

    var timedActivation = this.time.delayedCall(1000,()=>{
      this.scene.transition({
        target: "MainMenu",
        moveBelow: true,
        duration: 1000,
        onUpdate: this.transitionOut
      });
    })
    /* var timedActivation = this.time.addEvent({
      delay: 1000,
      callback: () => {
        this.scene.transition({
          target: "MainMenu",
          moveBelow: true,
          duration: 1000,
          //onUpdate: this.transitionOut,
        });
      },
    }); */
  }

  transitionOut(progress) {
    this.logo.y = this.game.renderer.height * progress;
  }
}
