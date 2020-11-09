import {MainMenu} from "scenes/MainMenu" ;

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
    scene: [MenuScene]
  };

  var game = new Phaser.Game(config);