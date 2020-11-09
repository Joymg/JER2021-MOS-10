class MainMenu extends Phaser.Scene{
    constructor() {
        super({ key: 'MainMenu' })
        console.log('MainMenu#constructor')
      }
    
      init() {
        console.log('MainMenu#init')
      }
    
      preload() {
        this.load.image("sky", "./assets/sky.png");
      }
    
      create() {
        console.log('SimpleScene#create')
      }
    
      update() {
        console.log('SimpleScene#update')
      }
}