class GameFinder extends Phaser.Scene {
  constructor() {
    super({
      key: "GameFinder"
    });
    this.text;
  }

  create() {
    var background = this.add.image(
      this.game.renderer.width / 2,
      this.game.renderer.height / 2,
      "backSelec"
    );
    
    //Texto buscando partida

    this.add.text(120, 384, 'Buscando partida, por favor espere...', { fontFamily: 'Arial', fontSize: 50, color: '#ffffff' });

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
      this.scene.start("MainMenu");
    });

	if (ready) {
      var timer = this.time.addEvent({
        delay: 500, // ms
        callback: checkServer,
        loop: true,
      });
    }
  }  
}