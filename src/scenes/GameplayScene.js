class GameplayScene extends Phaser.Scene {
  constructor() {
    super({ key: "GameplayScene" });
    this.cursors;
    this.character;

    this.pointer;

    this.char2;
    this.cursors2;

    this.bulletGroup1;
    this.bulletGroup2;

    console.log("GameplayScene#constructor");
  }

  init() {
    console.log("GameplayScene#init");
  }

  preload() {
    console.log("GameplayScene#preload");
    this.load.image("sky", "../assets/sky.png");
    this.load.image("bottomSprite", "../assets/star.png");
    this.load.image("topSprite", "../assets/platform.png");
    this.load.image("bulletSprite", "../assets/bomb.png");
  }

  create() {
    this.add.image(400, 300, "sky").setAngle(180).setTint(0x0ff00f);

    this.bulletGroup1 = this.physics.add.group({
      classType: Bullet,
      maxSize: 50,
      runChildUpdate: true,
    });
    this.bulletGroup2 = this.physics.add.group({
      classType: Bullet,
      maxSize: 50,
      runChildUpdate: true,
    });

    this.createCharacters();
    this.createInputs(game.config.localMode);
    this.setCollider();
  }

  update() {
    this.handleInputs();
  }

  //* Funciones de creado
  createCharacters(map) {
    var bot = this.physics.add.sprite(600, 300, "bottomSprite").setScale(4);
    var top = this.physics.add
      .sprite(600, 300, "topSprite")
      .setScale(0.3)
      .setOrigin(0.1, 0.5);
    this.character = new Character(
      "Aricato",
      600,
      300,
      0,
      top,
      bot,
      this.bulletGroup1
    );

    /*var cam = this.cameras.main.setSize(this.game.renderer.width/2,this.game.renderer.height);
    cam.startFollow(bot);*/

    var bot2 = this.physics.add
      .sprite(200, 300, "bottomSprite")
      .setScale(4)
      .setTint(0xfedcba);
    var top2 = this.physics.add
      .sprite(200, 300, "topSprite")
      .setScale(0.3)
      .setOrigin(0.1, 0.5)
      .setTint(0xff0000);
    this.char2 = new Character(
      "Tankitty",
      200,
      300,
      0,
      top2,
      bot2,
      this.bulletGroup2
    );

    /*var cam2= this.cameras.add(this.game.renderer.width/2,0,this.game.renderer.width/2,this.game.renderer.height);
    cam2.startFollow(bot2);*/
  }

  createInputs(localMode) {
    if (localMode) {
      this.cursors = this.input.keyboard.addKeys({
        up: Phaser.Input.Keyboard.KeyCodes.UP,
        down: Phaser.Input.Keyboard.KeyCodes.DOWN,
        left: Phaser.Input.Keyboard.KeyCodes.LEFT,
        right: Phaser.Input.Keyboard.KeyCodes.RIGHT,
        shoot: Phaser.Input.Keyboard.KeyCodes.O,
        //
        aimLeft: Phaser.Input.Keyboard.KeyCodes.I,
        aimRight: Phaser.Input.Keyboard.KeyCodes.P,
      });
      this.cursors2 = this.input.keyboard.addKeys({
        up: Phaser.Input.Keyboard.KeyCodes.W,
        down: Phaser.Input.Keyboard.KeyCodes.S,
        left: Phaser.Input.Keyboard.KeyCodes.A,
        right: Phaser.Input.Keyboard.KeyCodes.D,
        shoot: Phaser.Input.Keyboard.KeyCodes.SPACE,
        //
        aimLeft: Phaser.Input.Keyboard.KeyCodes.F,
        aimRight: Phaser.Input.Keyboard.KeyCodes.G,
      });
    } else {
      this.cursors = this.input.keyboard.addKeys({
        up: Phaser.Input.Keyboard.KeyCodes.UP,
        down: Phaser.Input.Keyboard.KeyCodes.DOWN,
        left: Phaser.Input.Keyboard.KeyCodes.LEFT,
        right: Phaser.Input.Keyboard.KeyCodes.RIGHT,
        shoot: Phaser.Input.Keyboard.KeyCodes.O,
      });
      this.cursors2 = this.input.keyboard.addKeys({
        up: Phaser.Input.Keyboard.KeyCodes.W,
        down: Phaser.Input.Keyboard.KeyCodes.S,
        left: Phaser.Input.Keyboard.KeyCodes.A,
        right: Phaser.Input.Keyboard.KeyCodes.D,
        shoot: Phaser.Input.Keyboard.KeyCodes.SPACE,
      });
    }
  }

  setCollider() {
    this.physics.add.overlap(
      this.character.bottomSprite,
      this.bulletGroup2,
      this.tankHit
    );
    this.physics.add.overlap(
      this.char2.bottomSprite,
      this.bulletGroup1,
      this.tankHit
    );
    this.physics.add.overlap(
      this.bulletGroup1,
      this.bulletGroup2,
      this.bulletsHit
    );
    this.physics.add.collider(
      this.character.bottomSprite,
      this.char2.bottomSprite
    );
  }

  //*Funciones de actualizacion
  handleInputs() {
    /* var alpha = Phaser.Math.Angle.Between(
      this.character.bottomSprite.x,
      this.character.bottomSprite.y,
      this.input.mousePointer.x,
      this.input.mousePointer.y
    );
    var beta = Phaser.Math.Angle.Between(
      this.char2.bottomSprite.x,
      this.char2.bottomSprite.y,
      this.input.mousePointer.x,
      this.input.mousePointer.y
    );

    alpha = Phaser.Math.RadToDeg(alpha);

    this.tweens.add({
      targets: this.character.topSprite,
      angle: alpha,
      duration: 0,
    });
    this.tweens.add({
      targets: this.char2.topSprite,
      rotation: beta,
      duration: 0,
    }); */

    //* Character 1
    if (this.cursors.left.isDown) {
      this.character.moveLeft();
    } else if (this.cursors.right.isDown) {
      this.character.moveRight();
    } else {
      this.character.stopX();
    }
    if (this.cursors.up.isDown) {
      this.character.moveUp();
    } else if (this.cursors.down.isDown) {
      this.character.moveDown();
    } else {
      this.character.stopY();
    }
    this.character.updateTopSide();

    if (this.cursors.aimLeft.isDown) {
      this.character.aimLeft();
    }
    if (this.cursors.aimRight.isDown) {
      this.character.aimRight();
    }
    if (this.cursors.shoot.isDown) {
      this.character.shoot();
    }

    //* Character 2
    if (this.cursors2.left.isDown) {
      this.char2.moveLeft();
    } else if (this.cursors2.right.isDown) {
      this.char2.moveRight();
    } else {
      this.char2.stopX();
    }
    if (this.cursors2.up.isDown) {
      this.char2.moveUp();
    } else if (this.cursors2.down.isDown) {
      this.char2.moveDown();
    } else {
      this.char2.stopY();
    }
    this.char2.updateTopSide();

    if (this.cursors2.aimLeft.isDown) {
      this.char2.aimLeft();
    }
    if (this.cursors2.aimRight.isDown) {
      this.char2.aimRight();
    }
    if (this.cursors2.shoot.isDown) {
      this.char2.shoot();
    }
  }

  tankHit(tank, bullet) {
    bullet.destroy();
  }

  bulletsHit(bullet1, bullet2) {
    bullet1.destroy();
    bullet2.destroy();
  }
}
