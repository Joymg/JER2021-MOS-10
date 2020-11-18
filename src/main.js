
var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
      default: "arcade",
      arcade: {
        gravity: { y: 0 },
        //ddebug :true
      },
    },
<<<<<<< Updated upstream
    scene: [GameplayScene,MainMenu,CharacterSelection,SettingsMenu,PauseMenu]
=======
<<<<<<< Updated upstream
    scene: [MainMenu,CharacterSelection,SettingsMenu,PauseMenu]
=======
    //el qeu va primero es el qeu se ve al iniciar, bueno para testeat
    scene: [GameplayScene,CharacterSelection,MainMenu,SettingsMenu,PauseMenu]
>>>>>>> Stashed changes
>>>>>>> Stashed changes
  };

  var game = new Phaser.Game(config);

