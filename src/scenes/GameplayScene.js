class GameplayScene extends Phaser.Scene {
  constructor() {
    super({ key: "GameplayScene" });

    const gm = new GameManager(this);
    this.cursors;

    this.pointer;

    this.cursors2;

    console.log("GameplayScene#constructor");
  }

  init() {
    console.log("GameplayScene#init");
  }

  preload() {
    console.log("GameplayScene#preload");
  }

  create() {
    //this.cameras.main.setBounds(0, 0, 1024, 2048);
    //this.cameras.main.setZoom(0.5);
    //var backgroud = this.add.image(this.game.renderer.width/2, this.game.renderer.height/2, "sky").setAngle(180).setTint(0x0ff00f).setScale(1.5);

    GameManager.bulletGroup1 = this.physics.add.group({
      classType: Bullet,
      maxSize: 5,
      bounceX: 1,
      bounceY: 1,
      collideWorldBounds: true,
    });


    GameManager.bulletGroup2 = this.physics.add.group({
      classType: BulletPlayer2,
      maxSize: 5,
      bounceX: 1,
      bounceY: 1,
      collideWorldBounds: true,
    });

    GameManager.woodenCrates = this.physics.add.group({
      classType: WoodenCrate,
      immovable: true,
    });
    GameManager.ironCrates = this.physics.add.group({
      classType: IronCrate,
      immovable: true,
    });
    GameManager.pits = this.physics.add.group({
      classType: Pit,
      immovable: true,
    });

    //Suelo
    var floorArray = [];
    var tilesLevel1 = [];
    for (var i = 0; i < 9; i++) {
      floorArray[i] = "Floor" + i.toString();
    }
    var posXFloor = -47;
    var posYFloor = -47;
    var posXplayer1;
    var posYplayer1;
    var posXplayer2;
    var posYplayer2;
    var string = this.cache.text.get("Level1");
    var lines = string.split(";");

    for (var i = 0; i < 9; i++) {
      tilesLevel1[i] = [];
      posYFloor += 94;
      posXFloor = -47;
      for (var j = 0; j < 12; j++) {
        tilesLevel1[i][j] = lines[i].split(",")[j];
        posXFloor += 94;
        var tileIndex;
        var random = Math.random();
        if (random < 0.03) {
          tileIndex = 0;
        } else if (random >= 0.03 && random < 0.06) {
          tileIndex = 1;
        } else if (random >= 0.06 && random < 0.4) {
          tileIndex = 8;
        } else {
          tileIndex = Math.round(Math.random() * (7 - 2) + 2);
        }
        var name = floorArray[tileIndex];
        switch (tilesLevel1[i][j]) {
          case "0":
            this.add.sprite(posXFloor, posYFloor, name);
            break;
          case "1":
            this.add.sprite(posXFloor, posYFloor, name);
            posXplayer1 = posXFloor;
            posYplayer1 = posYFloor;
            break;
          case "2":
            this.add.sprite(posXFloor, posYFloor, name);
            posXplayer2 = posXFloor;
            posYplayer2 = posYFloor;
            break;
          case "3":
            this.add.sprite(posXFloor, posYFloor, name);
            break;
          case "4":
            this.add.sprite(posXFloor, posYFloor, name);
            GameManager.ironCrates.create(posXFloor, posYFloor);
            break;
          case "5":
            this.add.sprite(posXFloor, posYFloor, name);
            GameManager.woodenCrates.create(posXFloor, posYFloor);
            break;
        }
      }
    }

    this.createCharacters(posXplayer1, posYplayer1, posXplayer2, posYplayer2);
    this.createInputs(game.config.localMode);
    this.setColliders();
  }

  update() {
    this.handleInputs();
    this.checkGameOver();
  }

  //* Funciones de creado
  createCharacters(posXplayer1, posYplayer1, posXplayer2, posYplayer2) {
    //var bot = this.physics.add.sprite(600, 300, "bottomSprite").setScale(0.05);
    var bot = this.physics.add.sprite(posXplayer1, posYplayer1, "animationTank1").setScale(0.05);
    var top = this.physics.add
      .sprite(posXplayer1, posYplayer1, "topSprite")
      .setScale(0.05)
      .setOrigin(0.3, 0.5);

    this.anims.create({
      key: "tank1_animation",
      frames: this.anims.generateFrameNumbers("animationTank1", {
        start: 0,
        end: 5,
      }),
      repeat: -1,
      frameRate: 10,
    });

    bot.anims.play("tank1_animation");
    bot.setCollideWorldBounds(true);

    GameManager.character = new Character("Aricato", 1, 180, top, bot, GameManager.bulletGroup1);

    /*var cam = this.cameras.main.setSize(this.game.renderer.width/2,this.game.renderer.height);
    cam.startFollow(bot);*/

    //var bot2 = this.physics.add.sprite(200, 300, "bottomSprite").setScale(0.05);
    var bot2 = this.physics.add.sprite(posXplayer2, posYplayer2, "animationTank1").setScale(0.05);
    var top2 = this.physics.add
      .sprite(posXplayer2, posYplayer2, "topSprite")
      .setScale(0.05)
      .setOrigin(0.3, 0.5);

    bot2.anims.play("tank1_animation");
    bot2.setCollideWorldBounds(true);

    GameManager.character2 = new Character("Tankitty", 2, 0, top2, bot2, GameManager.bulletGroup2);

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
        aimLeft: Phaser.Input.Keyboard.KeyCodes.C,
        aimRight: Phaser.Input.Keyboard.KeyCodes.V,
      });
    } else {
      this.cursors = this.input.keyboard.addKeys({
        up: Phaser.Input.Keyboard.KeyCodes.W,
        down: Phaser.Input.Keyboard.KeyCodes.S,
        left: Phaser.Input.Keyboard.KeyCodes.A,
        right: Phaser.Input.Keyboard.KeyCodes.D,
        shoot: Phaser.Input.Keyboard.KeyCodes.SPACE,
      });
    }
  }

  setColliders() {
    //colision balas del personaje 2 con el personaje 1
    this.physics.add.overlap(
      GameManager.character.bottomSprite,
      GameManager.bulletGroup2,
      this.tankHit1
    );

    //colision balas del personaje 1 con el personaje 1
    this.physics.add.overlap(
      GameManager.character.bottomSprite,
      GameManager.bulletGroup1,
      this.tankHit1
    );
    //colision balas del personaje 1 con el personaje 2
    this.physics.add.overlap(
      GameManager.character2.bottomSprite,
      GameManager.bulletGroup1,
      this.tankHit2
    );
    //colision balas del personaje 2 con el personaje 2
    this.physics.add.overlap(
      GameManager.character2.bottomSprite,
      GameManager.bulletGroup2,
      this.tankHit2
    );
    //colision entre balas del personaje 1 y balas del personaje 2
    this.physics.add.overlap(GameManager.bulletGroup1, GameManager.bulletGroup2, this.bulletsHit);
    //colision entre balas del personaje 1
    this.physics.add.overlap(GameManager.bulletGroup1, GameManager.bulletGroup1, this.bulletsHit);
    //colision entre balas del personaje 2
    this.physics.add.overlap(GameManager.bulletGroup2, GameManager.bulletGroup2, this.bulletsHit);

    //colision entre tankes
    this.physics.add.collider(
      GameManager.character.bottomSprite,
      GameManager.character2.bottomSprite
    );
    //colision de las balas del personaje 2 con las cajas de madera
    this.physics.add.collider(GameManager.woodenCrates, GameManager.bulletGroup2, this.obstacleHit);
    //colision de las balas del personaje 1 con las cajas de madera
    this.physics.add.collider(GameManager.woodenCrates, GameManager.bulletGroup1, this.obstacleHit);
    //colision de las balas del personaje 2 con las cajas de hierro
    this.physics.add.collider(GameManager.ironCrates, GameManager.bulletGroup2, this.obstacleHit);
    //colision de las balas del personaje 1 con las cajas de madera
    this.physics.add.collider(GameManager.ironCrates, GameManager.bulletGroup1, this.obstacleHit);

    this.physics.add.collider(GameManager.character.bottomSprite, GameManager.woodenCrates); //colision del personaje 1 con las cajas de madera
    this.physics.add.collider(GameManager.character2.bottomSprite, GameManager.woodenCrates); //colision del personaje 2 con las cajas de madera

    this.physics.add.collider(GameManager.character.bottomSprite, GameManager.ironCrates); //colision del personaje 1 con las cajas de hierro
    this.physics.add.collider(GameManager.character2.bottomSprite, GameManager.ironCrates); //colision del personaje 2 con las cajas de hierro

    this.physics.add.collider(GameManager.character.bottomSprite, GameManager.pits); //colision del personaje 1 con los hoyos
    this.physics.add.collider(GameManager.character2.bottomSprite, GameManager.pits); //colision del personaje 2 con los hoyos

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
      GameManager.character.moveLeft();
    } else if (this.cursors.right.isDown) {
      GameManager.character.moveRight();
    } else {
      GameManager.character.stopX();
    }
    if (this.cursors.up.isDown) {
      GameManager.character.moveUp();
    } else if (this.cursors.down.isDown) {
      GameManager.character.moveDown();
    } else {
      GameManager.character.stopY();
    }
    GameManager.character.updateTopSide();

    if (this.cursors.aimLeft.isDown) {
      GameManager.character.aimLeft();
    }
    if (this.cursors.aimRight.isDown) {
      GameManager.character.aimRight();
    }
    if (this.cursors.shoot.isDown) {
      GameManager.character.shoot();
    }

    //* Character 2
    if (this.cursors2.left.isDown) {
      GameManager.character2.moveLeft();
    } else if (this.cursors2.right.isDown) {
      GameManager.character2.moveRight();
    } else {
      GameManager.character2.stopX();
    }
    if (this.cursors2.up.isDown) {
      GameManager.character2.moveUp();
    } else if (this.cursors2.down.isDown) {
      GameManager.character2.moveDown();
    } else {
      GameManager.character2.stopY();
    }
    GameManager.character2.updateTopSide();

    if (this.cursors2.aimLeft.isDown) {
      GameManager.character2.aimLeft();
    }
    if (this.cursors2.aimRight.isDown) {
      GameManager.character2.aimRight();
    }
    if (this.cursors2.shoot.isDown) {
      GameManager.character2.shoot();
    }
  }

  checkGameOver(localMode) {
    if (GameManager.character.healthPoints <= 0) {
      var winner = GameManager.character;
      this.scene.pause();
      this.scene.launch("VictoryScene", { winner });
    }
    if (GameManager.character2.healthPoints <= 0) {
      var winner = GameManager.character2;
      this.scene.pause();
      this.scene.launch("VictoryScene", { winner });
    }
  }

  //Funciones de colisiones
  tankHit1(tank, bullet) {
    GameManager.character.getHit();
    bullet.destroy();
  }
  tankHit2(tank, bullet) {
    GameManager.character2.getHit();
    bullet.destroy();
  }

  bulletsHit(bullet1, bullet2) {
    bullet1.destroy();
    bullet2.destroy();
  }

  obstacleHit(obstacle, bullet) {
    obstacle.getHit();
    bullet.bounce();
  }
}
