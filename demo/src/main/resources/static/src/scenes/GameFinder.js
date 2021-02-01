class GameFinder extends Phaser.Scene {
  constructor() {
    super({
      key: "GameFinder",
    });
    this.imReady = false;
    this.onlineIsReady = false;
    disconnected = false;
  }

  create() {
    this.imReady = false;
    this.onlineIsReady = false;
    disconnected = false;
    connection = new WebSocket("ws://" + wsUrl + "/player");

    connection.onerror = function (e) {
      console.log("WS error: " + e);
    };

    connection.onmessage = function (msg) {
      let serverMsg = JSON.parse(msg.data);
      switch (serverMsg.id) {
        case 0: // organizar partidas
          clientGame = serverMsg.gameId;
          clientIdInGame = serverMsg.character;
          disconnected = false;
          break;
        case 1: // inputs
          oponentInputs = serverMsg;
          break;
        case 2: // desconexion
          disconnected = true;
          break;
        case 3: // iniciar game a la vez
		  console.log(game.scene.scenes[game.scene.scenes.length - 1].onlineIsReady);
          game.scene.scenes[game.scene.scenes.length - 1].onlineIsReady = true;
		    if (this.imReady && this.onlineIsReady) {
		      game.scene.start("CharacterSelection");
		      game.scene.stop("GameFinder");
		    }
          break;
		case 4:			
	      switch (serverMsg.id) {
			case 4:
				this.p2Index = serverMsg.characterIndex;
				break;
		   };
      }
    };

    connection.onclose = function () {
      console.log("Closing socket")
    };
    
    var background = this.add.image(
      this.game.renderer.width / 2,
      this.game.renderer.height / 2,
      "backSelec"
    );

    //Texto buscando partida
    this.add.text(120, 384, "Buscando partida, por favor espere...", {
      fontFamily: "Arial",
      fontSize: 50,
      color: "#ffffff",
    });

    //Boton de atras
    let backButton = this.add.image(
      (this.game.renderer.width * 9) / 10,
      (this.game.renderer.height * 1.2) / 10,
      "Button_Back"
    );
    backButton.setScale(0.3);

    backButton.setInteractive();
    backButton.on("pointerover", () => {
      backButton.setTint(0x909090);
    });
    backButton.on("pointerout", () => {
      backButton.setTint();
    });
    backButton.on("pointerdown", () => {
      connection.close();
      this.scene.start("MainMenu");
    });

    //boton de bloquear
    let lockCharac = this.add
      .image(this.game.renderer.width / 2, (this.game.renderer.height * 8.5) / 10, "Button_Play")
      .setScale(0.3);
    lockCharac.setDepth(1000);

    lockCharac.setInteractive();
    lockCharac.on("pointerover", () => {
      lockCharac.setTint(0x909090);
      lockCharac.setScale(0.32);
    });
    lockCharac.on("pointerout", () => {
      lockCharac.setTint();
      lockCharac.setScale(0.3);
    });
    lockCharac.on("pointerdown", () => {
      let playerReady = '{"id": 3, "gameId":' + clientGame + "}";
      this.imReady = true;
      connection.send(playerReady);
    });

    if (ready) {
      var timer = this.time.addEvent({
        delay: 500, // ms
        callback: checkServer,
        loop: true,
      });
    }
  }

  update() {
    if (disconnected) {
      this.scene.start("DisconnectScene");
    }
    if (this.imReady && this.onlineIsReady) { 
			var tint1;
            var tint2;
			var index1 = 0;
			var index2 = 3;
            //console.log(this.player1Character.texture.key, tint1);
            //console.log(this.player2Character.texture.key, tint2);
            this.scene.start("GameplayScene", { tint1, tint2, index1, index2});
     		game.scene.stop("GameFinder");
    }
  }
}
