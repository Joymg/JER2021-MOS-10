class DisconnectScene extends Phaser.Scene {
  constructor() {
    super({ key: "DisconnectScene" });
  }

  create() {
    this.add.image(this.game.renderer.width / 2, this.game.renderer.height / 2, "MarcoPausa");
    let text = this.add.text(
      160,
      310,
      "El oponente se ha deconectado.\nSerás enviado al menú principal.",
      { fontFamily: "Arial", fontSize: 50, color: "#ffffff" }
    );

    this.timer = this.time.addEvent({
      delay: 3000,
      callback: this.redirect
    });


  }
  
  redirect(){
    connection.close();
    game.scene.start("MainMenu")
    game.scene.stop("DisconnectScene");
  }
}
