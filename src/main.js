var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
      default: "arcade",
      arcade: {
        gravity: { y: 0 },
        debug :true
      },
    },
    //el qeu va primero es el qeu se ve al iniciar, bueno para testeat
    scene: [MainMenu,CreditsScene,GameplayScene,SettingsMenu,CharacterSelection,PauseMenu,VictoryScene],

    localMode: true

  };

  var game = new Phaser.Game(config);
  game.config.localMode = true; 

