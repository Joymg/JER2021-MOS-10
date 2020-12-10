var config = {
    type: Phaser.AUTO,
    parent: 'centro', //"centro" es el div del html que contiene el canvas del juego
    width: 1128,      //tamaño canvas
    height: 846,
    physics: {
      default: "arcade",
      arcade: {
        gravity: { y: 0 },
        debug :true
      },
    },
    //el qeu va primero es el qeu se ve al iniciar, bueno para testeat
    scene: [Loader,MainMenu,CreditsScene,GameplayScene,SettingsMenu,CharacterSelection,PauseMenu,VictoryScene],

    localMode: true,
    language: "spanish"

  };

  var game = new Phaser.Game(config);
  game.config.localMode = true; 
  game.config.language = "spanish";

