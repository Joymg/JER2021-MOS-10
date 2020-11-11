class SettingsMenu extends Phaser.Scene{
    constructor() {
        super({ key: 'ConfigMenu' })
        console.log('ConfigMenu#constructor');
      }
    
      init() {
        console.log('ConfigMenu#init');
      }
    
      preload() {
        this.load.image("sky", "../assets/sky.png");
        this.load.image("back", "../assets/star.png");
      }
    
      create() {
        this.add.image(400,300,"sky").setTint(0x654321);

        let backButton = this.add.image(
          this.game.renderer.width *9/ 10,
          this.game.renderer.height / 10,
          "back"
        );
        backButton.scale =3;
    
        backButton.setInteractive();
        backButton.on("pointerover", () => {
          backButton.setTint(0x00a0af);
        });
        backButton.on("pointerout", () => {
          backButton.setTint();
        });
        backButton.on("pointerdown", () => {
           this.scene.start("MainMenu");
        });
      }
      
      update() {
        console.log('ConfigMenu#update');
      }
}