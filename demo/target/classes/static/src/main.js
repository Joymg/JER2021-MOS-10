var config = {
    type: Phaser.AUTO,
    parent: 'centro', //"centro" es el div del html que contiene el canvas del juego
    width: 1024,      //tamaño canvas
    height: 768,
    physics: {
      default: "arcade",
      arcade: {
        gravity: { y: 0 },
        //debug :true
      },
    },
    //el qeu va primero es el qeu se ve al iniciar, bueno para testeat
    scene: [Loader,PruebasScene,MainMenu,CreditsScene,GameplayScene,SettingsMenu,CharacterSelection,PauseMenu,VictoryScene,DisconnectScene,CountDownScene,ProfileMenu,GameFinder],

    localMode: true,
    language: "spanish"

  };

  var game = new Phaser.Game(config);
  game.config.localMode = false; 
  game.config.language = "spanish";

var activePlayerID;
var ready = false
var serverNotRespond = 0;
var activePlayers;
let serverOnline = true;


let clientGame = 0;
let clientIdInGame = 0;
let connection;
let wsUrl = origin.split("/")[2];
let oponentInputs = {inputs:[],alpha:0};
let disconnected = false;


