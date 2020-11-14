
var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
      default: "arcade",
      arcade: {
        gravity: { y: 10 },
      },
    },
    //el qeu va primero es el qeu se ve al iniciar, bueno para testeat
    scene: [CharacterSelection,MainMenu,SettingsMenu,PauseMenu]
  };

  var game = new Phaser.Game(config);

