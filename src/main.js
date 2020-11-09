
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
    scene: [MainMenu,CharacterSelection,SettingsMenu,PauseMenu]
  };

  var game = new Phaser.Game(config);

