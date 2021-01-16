class ProfileMenu extends Phaser.Scene {
    constructor() {
      super({
        key: "PerfilMenu",
      });
      console.log("ProfileMenu#constructor");
    }
  
    preload() {}

    create() {
      var background = this.add.image(
        this.game.renderer.width / 2,
        this.game.renderer.height / 2,
        "backSelec"
      );
      var title = this.add
        .image(this.game.renderer.width / 3.3, this.game.renderer.height * 0.2, "Perfil")
        .setScale(0.5);
  
      //Boton de atras
      let backButton = this.add.image(
        (this.game.renderer.width * 9) / 10,
        this.game.renderer.height / 8,
        "Button_Back"
      );
      backButton.setScale(0.3);
  
      backButton.setInteractive();
      //efectos al pasar el raton por encima
      backButton.on("pointerover", () => {
        backButton.setTint(0x909090);
        backButton.setScale(0.32);
      });
      backButton.on("pointerout", () => {
        backButton.setTint();
        backButton.setScale(0.3);
      });
      //al pulsar el boton te devuelve al menu pricipal
      backButton.on("pointerdown", () => {
        this.scene.start("MainMenu");
      });
    }
  }
  