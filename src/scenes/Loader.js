class Loader extends Phaser.Scene {
  constructor() {
    super({
      key: "Loader"
    });
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
    this.load.image("backTankats", "../assets/FondoTankats.png");
    this.load.image("platform", "../assets/platform.png");
    this.load.image("bomb", "../assets/bomb.png");
    this.load.image("star", "../assets/star.png");
    this.load.image("title", "../assets/TANKATS.png");
    this.load.image("play", "../assets/text/Play.png");
    this.load.image("emitter1", "../assets/Emitter1.png");
    this.load.image("emitter2", "../assets/Emitter2.png");
    this.load.image("emitter3", "../assets/Emitter3.png");


    //Botones 
    this.load.image("Button_Back", "../assets/Botones/Button_Back.png");
    this.load.image("Button_Config", "../assets/Botones/Button_Config.png");
    this.load.image("Button_Left", "../assets/Botones/Button_Left.png");
    this.load.image("Button_Right", "../assets/Botones/Button_Right.png");
    this.load.image("Button_Right", "../assets/Botones/Button_Right.png");

    this.load.image("Pink_TextBox", "../assets/text/Pink_Text.png");
    this.load.image("Button_Play", "../assets/text/Miau.png");
    this.load.image("Purple_TextBox", "../assets/text/Purple_Text.png");


    //Textos
    this.load.image("Credits", "../assets/text/Credits.png");
    this.load.image("ENG", "../assets/text/ENG.png");
    this.load.image("ESP", "../assets/text/ESP.png");
    this.load.image("GoBackToTitle", "../assets/text/GoBackToTitle.png");
    this.load.image("IrAlTitulo", "../assets/text/IrAlTitulo.png");
    this.load.image("Idioma", "../assets/text/Idioma.png");
    this.load.image("Language", "../assets/text/Language.png");
    this.load.image("Music", "../assets/text/Music.png");
    this.load.image("Musica", "../assets/text/Musica.png");
    this.load.image("PlayAgain", "../assets/text/PlayAgain.png");
    this.load.image("VolverAJugar", "../assets/text/VolverAJugar.png");


    //Personajes
    this.load.image("topSprite", "../assets/characters/catsudonTopSprite.png");
    this.load.image("bottomSprite", "../assets/characters/1_Tanque_ParteAbajo.png");
    this.load.spritesheet("animationTank1", "../assets/spritesheet_tank1.png", {
      frameWidth: 1721,
      frameHeight: 1844
    });

    //Balas
    this.load.image("bulletPlayer1", "../assets/Balas/Bala_Jugador1.png");
    this.load.image("bulletPlayer2", "../assets/Balas/Bala_Jugador2.png");

    //elementos de la pantalla de configuracion
    this.load.image("back", "../assets/star.png");
    this.load.image("muteUp", "../assets/muteUp.png");
    this.load.image("muteDown", "../assets/muteDown.png");
    this.load.image("settingsTitle", "../assets/text/Settings.png");
    this.load.image("settingsMusica", "../assets/text/Musica.png");
    this.load.image("settingsIdioma", "../assets/text/Idioma.png");
    this.load.image("settingsESP", "../assets/text/ESP.png");
    this.load.image("settingsENG", "../assets/text/ENG.png");

    //elementos de la seleccion de personaje
    this.load.image("sky", "../assets/sky.png");
    this.load.image("backSelec", "../assets/FondoSeleccion.png");
    this.load.image("Aricato", "/assets/characters/CatsudonPortrait.png");
    this.load.image("Catsudon", "/assets/characters/CatsudonPortrait.png");
    this.load.image("Tankitty", "/assets/characters/CatsudonPortrait.png");
    this.load.image("Catígula", "/assets/characters/CatsudonPortrait.png");
    this.load.image("Catótico", "/assets/characters/CatsudonPortrait.png");


    //elementos del gameplay
    this.load.image("woodenCrateSprite", "../assets/WoodenObstacle.png");
    this.load.image("ironCrateSprite", "../assets/IronObstacle.png");
    this.load.image("pitSprite", "../assets/pit.png");
    this.load.image("Floor0", "../assets/Floor/TileFloor_1.png");
    this.load.image("Floor6", "../assets/Floor/TileFloor_2.png");
    this.load.image("Floor2", "../assets/Floor/TileFloor_3.png");
    this.load.image("Floor3", "../assets/Floor/TileFloor_4.png");
    this.load.image("Floor4", "../assets/Floor/TileFloor_5.png");
    this.load.image("Floor5", "../assets/Floor/TileFloor_6.png");
    this.load.image("Floor1", "../assets/Floor/TileFloor_7.png");
    this.load.image("Floor7", "../assets/Floor/TileFloor_8.png");
    this.load.image("Floor8", "../assets/Floor/TileFloor_9.png");
    this.load.image("Particle", "../assets/Polvo.png");
    this.load.image("Fade", "../assets/Fade oscuro.png");
    this.load.image("confeti1", "../assets/Confeti1.png");
    this.load.image("confeti2", "../assets/Confeti2.png");
    this.load.image("confeti3", "../assets/Confeti3.png");

    //Elementos del UI
    this.load.image("LeftLife1", "../assets/IU/LeftLife1.png");
    this.load.image("LeftLife2", "../assets/IU/LeftLife2.png");
    this.load.image("LeftLife3", "../assets/IU/LeftLife3.png");
    this.load.image("LeftLife4", "../assets/IU/LeftLife4.png");
    this.load.image("LeftLife5", "../assets/IU/LeftLife5.png");
    this.load.image("LeftLife6", "../assets/IU/LeftLife6.png");
    this.load.image("RightLife1", "../assets/IU/RightLife1.png");
    this.load.image("RightLife2", "../assets/IU/RightLife2.png");
    this.load.image("RightLife3", "../assets/IU/RightLife3.png");
    this.load.image("RightLife4", "../assets/IU/RightLife4.png");
    this.load.image("RightLife5", "../assets/IU/RightLife5.png");
    this.load.image("RightLife6", "../assets/IU/RightLife6.png");
    this.load.image("PlayerIcon", "../assets/IU/PlayerIcon.png");
    this.load.image("Fade", "../assets/Fade.png");
    this.load.image("jugador1", "../assets/jugador1.png");
    this.load.image("jugador2", "../assets/jugador2.png");
    this.load.image("MarcoPausa", "../assets/MarcoPausa.png");



    //Elementos de Texto
    this.load.image("VictoryJ1", "../assets/text/VictoryJ1.png");
    this.load.image("VictoryJ2", "../assets/text/VictoryJ2.png");
    this.load.image("Miau", "../assets/text/Miau.png");
    this.load.image("One", "../assets/text/One.png");
    this.load.image("Two", "../assets/text/Two.png");
    this.load.image("Three", "../assets/text/Three.png");
    this.load.image("VolverAJugar", "../assets/text/VolverAJugar.png");
    this.load.image("IrAlTitulo", "../assets/text/IrAlTitulo.png");
    this.load.image("Creditos", "../assets/text/Credits.png");


    //Sonidos
    this.load.audio("catDamage1", "../assets/sounds/catDamege1.mp3");
    this.load.audio("catDamage2", "../assets/sounds/catDamege2.mp3");
    this.load.audio("GetPowerUp", "../assets/sounds/GetPowerUp.mp3");
    this.load.audio("PowerUpEnd", "../assets/sounds/PowerUpEnd.mp3");
    this.load.audio("metalImpact1", "../assets/sounds/metalImpact1.mp3");
    this.load.audio("metalImpact2", "../assets/sounds/metalImpact2.mp3");
    this.load.audio("shot1", "../assets/sounds/shot1.mp3");
    this.load.audio("shot2", "../assets/sounds/shot2.mp3");
    this.load.audio("shot3", "../assets/sounds/shot3.mp3");
    this.load.audio("shot4", "../assets/sounds/shot4.mp3");
    this.load.audio("tankMovement", "../assets/sounds/tankMovement.mp3");
    this.load.audio("woodImpact1", "../assets/sounds/woodImpact1.mp3");
    this.load.audio("woodImpact2", "../assets/sounds/woodImpact2.mp3");
    this.load.audio("BattleMusic", "../assets/sounds/BattleMusic.mp3");
    this.load.audio("MenuMusic", "../assets/sounds/MenuMusic.mp3");


    //Mapas
    this.load.text('Level1', '../src/json/Tiles_Level1.txt');
    this.load.text('Level2', '../src/json/Tiles_Level2.txt');
    this.load.text('Level3', '../src/json/Tiles_Level3.txt');
    this.load.text('Level4', '../src/json/Tiles_Level4.txt');
    this.load.text('Level5', '../src/json/Tiles_Level5.txt');

    //this.load.image("floorTiles", "../assets/tilesetsuelo.png");

    this.load.on("complete", function () {
      progressBar.destroy();
      progressBox.destroy();
      loadingText.destroy();
      percentText.destroy();
    });
  }

  create() {
    this.logo = this.add.image(0, 0, "sky").setOrigin(0).setTint(0xff0000).setScale(1.5);
    this.sound.add("MenuMusic", { loop: true });
    this.sound.add("BattleMusic", { loop: true });
    this.scene.start("MainMenu");
  }
}