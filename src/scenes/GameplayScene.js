var text;
var textUI;
var timer = -1;
var speedUp;
var speedDown;
var shield;
var touched = false;
var timerCreated = false;

var text2;
var textUI2;
var timer2 = -1;
var speedUp2;
var speedDown2;
var shield2;
var touched2 = false;
var timerCreated2 = false;

var timerItem = -1;
var timerItemCreated = false;
var itemDestroyed = false;

var powerUpCollider1;
var powerUpCollider2;

class GameplayScene extends Phaser.Scene {
  constructor() {
    super({
      key: "GameplayScene",
    });
    const gm = new GameManager(this);
    this.cursors;

    this.pointer;

    this.cursors2;

    this.paused;

    this.tint1;
    this.tint2;
  }

  init(data) {
    this.tint1 = data.tint1;
    this.tint2 = data.tint2;
    console.log(this.tint1, data.tint1);
    console.log(this.tint2, data.tint2);
  }

  create() {
    if (!this.sound.get("BattleMusic").isPlaying) {
      this.sound.get("BattleMusic").play();
    }
    this.createGroups();

    //---- Generación de la escena por tiles ----
    var floorArray = [];
    var tilesLevel1 = [];
    for (var i = 0; i < 9; i++) {
      floorArray[i] = "Floor" + i.toString();
    }

    var posXFloor = -47;
    var posYFloor = -47;

    //Posición de los jugadores
    var posXplayer1;
    var posYplayer1;
    var posXplayer2;
    var posYplayer2;

    //Posición powerUp
    var posXitem1;
    var posYitem1;

    //Lee el fichero de texto con la disposición de las tiles.
    var levelrandom = Math.round(Math.random() * (5 - 1) + 1);
    var level = "Level" + levelrandom.toString();
    var string = this.cache.text.get(level);
    var lines = string.split(";");

    //Genera la escena a partir del fichero.
    for (var i = 0; i < 9; i++) {
      tilesLevel1[i] = [];
      posYFloor += 94;
      posXFloor = -47;
      for (var j = 0; j < 12; j++) {
        tilesLevel1[i][j] = lines[i].split(",")[j];
        posXFloor += 94;
        var tileIndex;

        //Probabilidad de tiles de suelo.
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
          //Solo suelo.
          case "0":
            this.add.sprite(posXFloor, posYFloor, name);
            break;
          //Jugador 1.
          case "1":
            this.add.sprite(posXFloor, posYFloor, name);
            posXplayer1 = posXFloor;
            posYplayer1 = posYFloor;
            break;
          //Jugador 2.
          case "2":
            this.add.sprite(posXFloor, posYFloor, name);
            posXplayer2 = posXFloor;
            posYplayer2 = posYFloor;
            break;
          //PowerUp.
          case "3":
            this.add.sprite(posXFloor, posYFloor, name);
            posXitem1 = posXFloor;
            posYitem1 = posYFloor;
            break;
          //Obstáculos de hierro.
          case "4":
            this.add.sprite(posXFloor, posYFloor, name);
            GameManager.ironCrates.create(posXFloor, posYFloor);
            break;
          //Cajas de madera.
          case "5":
            this.add.sprite(posXFloor, posYFloor, name);
            GameManager.woodenCrates.create(posXFloor, posYFloor);
            break;
          //Agujeros [Sin implementar todavía].
          case "6":
            this.add.sprite(posXFloor, posYFloor, name);
        }
      }
    }
    this.createUI();
    this.createCharacters(posXplayer1, posYplayer1, posXplayer2, posYplayer2, posXitem1, posYitem1);
    this.createInputs(game.config.localMode);
    this.setColliders();
    
    textUI2 = this.add.image(1152, 220, "TimeRight").setScale(0.17);
    text2 = this.add.text(1033, 154, '', {fontFamily: 'Arial', fontSize: '50px', fontStyle: 'Bold', color: '#D1CFBD'});
    speedUp2 = this.add.image(960, 112, "SpeedUp").setVisible(false).setScale(0.55);
    speedDown2 = this.add.image( 213, 117, "SpeedDown").setVisible(false).setScale(0.6);
    shield2 = this.add.image(870, 115, "Shield").setVisible(false).setScale(0.6);

    textUI = this.add.image(205, 220, "TimeLeft").setScale(0.17);
    text = this.add.text(70, 154, '', {fontFamily: 'Arial', fontSize: '50px', fontStyle: 'Bold', color: '#D1CFBD'});
    speedUp = this.add.image(168, 112, "SpeedUp").setVisible(false).setScale(0.55);
    speedDown = this.add.image(915, 117, "SpeedDown").setVisible(false).setScale(0.6);
    shield = this.add.image(258, 115, "Shield").setVisible(false).setScale(0.6);

    this.paused = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ESC);
    
    this.scene.pause("GameplayScene");
    this.scene.launch("CountDownScene");
    this.time.delayedCall(3000, () => {
      this.scene.stop("CountDownScene");
    });
  }

  update() {
      this.countdown(touched);
      this.countdown2(touched2);
      this.spawnItem(itemDestroyed);
    if (this.paused.isDown) {
      this.scene.launch("PauseMenu");
      this.paused.isDown = false;
      this.scene.pause();


    }

    this.handleInputs();
    this.updateUI();
    this.checkGameOver();
  }

  //* Funciones de creado
  createCharacters(posXplayer1, posYplayer1, posXplayer2, posYplayer2, posXitem1, posYitem1) {
    //Partículas tanque 1.
    var particles1 = this.add.particles("Particle");
    var particles2 = this.add.particles("emitter3");

    var emitter1 = particles1.createEmitter({
      x: posXplayer1,
      y: posYplayer1,
      angle: { min: -80, max: 80 },
      rotate: { min: 30, max: 240 },
      speed: 50,
      lifespan: { min: 500, max: 1000 },
      frequency: 100,
      scale: { min: 0.1, max: 0.5 },
      alpha: { min: 0.1, max: 0.2 },
    });

    var emitter1_1 = particles2.createEmitter({
      x: posXplayer1,
      y: posYplayer1,
      angle: { min: -80, max: 80 },
      rotate: { min: 30, max: 240 },
      gravityY: -50,
      speed: 50,
      lifespan: { min: 500, max: 2000 },
      frequency: 100,
      scale: { min: 0.1, max: 0.2 },
      alpha: { min: 0.1, max: 0.2 },
    });

    //var bot = this.physics.add.sprite(600, 300, "bottomSprite").setScale(0.05);
    var bot = this.physics.add.sprite(posXplayer1, posYplayer1, "animationTank1").setScale(0.05);

    bot.setTint(this.tint1);
    var top = this.physics.add
      .sprite(posXplayer1, posYplayer1, "topSprite")
      .setScale(0.05)
      .setOrigin(0.3, 0.5);
    top.tintFill = false;
    top.setTint(this.tint1);
    console.log("top1", top.tintTopLeft);
    console.log("bot1", bot.tintTopLeft);
    //Animación tanque 1
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

    GameManager.character = new Character(
      "Aricato",
      1,
      180,
      top,
      bot,
      GameManager.bulletGroup1,
      emitter1,
      emitter1_1
    );

    /*var cam = this.cameras.main.setSize(this.game.renderer.width/2,this.game.renderer.height);
    cam.startFollow(bot);*/

    //POWERUPS
    var powerUpItem = this.physics.add.sprite(posXitem1, posYitem1, "SpeedUp");
    this.anims.create({
      key: "SpeedUp_animation",
      frames: this.anims.generateFrameNumbers("SpeedUp", {
        start: 0,
        end: 3,
      }),
      repeat: -1,
      frameRate: 7,
    }); 
    this.anims.create({
      key: "SpeedDown_animation",
      frames: this.anims.generateFrameNumbers("SpeedDown", {
        start: 0,
        end: 3,
      }),
      repeat: -1,
      frameRate: 7,
    });    
    this.anims.create({
      key: "Shield_animation",
      frames: this.anims.generateFrameNumbers("Shield", {
        start: 0,
        end: 3,
      }),
      repeat: -1,
      frameRate: 7,
    });       
    powerUpItem.anims.play("SpeedUp_animation");
    GameManager.item1 = new Item(
      posXitem1,
      posYitem1,
      powerUpItem,
      0
    );


    //Partículas tanque 2.
    var emitter2 = particles1.createEmitter({
      x: posXplayer2,
      y: posYplayer2,
      angle: { min: 100, max: 260 },
      rotate: { min: 30, max: 240 },
      speed: 50,
      lifespan: { min: 500, max: 1000 },
      frequency: 100,
      scale: { min: 0.1, max: 0.5 },
      alpha: { min: 0.1, max: 0.2 },
    });

    var emitter2_1 = particles2.createEmitter({
      x: posXplayer2,
      y: posYplayer2,
      angle: { min: 100, max: 260 },
      rotate: { min: 30, max: 240 },
      gravityY: -50,
      speed: 50,
      lifespan: { min: 500, max: 2000 },
      frequency: 100,
      scale: { min: 0.1, max: 0.5 },
      alpha: { min: 0.1, max: 0.2 },
    });

    //var bot2 = this.physics.add.sprite(200, 300, "bottomSprite").setScale(0.05);
    var bot2 = this.physics.add
      .sprite(posXplayer2, posYplayer2, "animationTank1")
      .setScale(0.05)
      .setTint(this.tint2);
    var top2 = this.physics.add
      .sprite(posXplayer2, posYplayer2, "topSprite")
      .setScale(0.05)
      .setOrigin(0.3, 0.5)
      .setTint(this.tint2);

    console.log(2, top2.tintTopLeft);
    bot2.anims.play("tank1_animation");
    bot2.setCollideWorldBounds(true);

    GameManager.character2 = new Character(
      "Tankitty",
      2,
      0,
      top2,
      bot2,
      GameManager.bulletGroup2,
      emitter2,
      emitter2_1
    );

    /*var cam2= this.cameras.add(this.game.renderer.width/2,0,this.game.renderer.width/2,this.game.renderer.height);
    cam2.startFollow(bot2);*/
  }
  createGroups() {
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
  }

  createUI() {
    GameManager.p1HpBar = this.physics.add
      .image(
        (this.game.renderer.width * 1.2) / 10,
        (this.game.renderer.height * 0.4) / 10,
        "LeftLife6"
      )
      .setDepth(999)
      .setScale(0.2)
      .setOrigin(0, 0);
    GameManager.p2HpBar = this.physics.add
      .image(
        (this.game.renderer.width * 8.8) / 10,
        (this.game.renderer.height * 0.4) / 10,
        "RightLife6"
      )
      .setDepth(999)
      .setScale(0.2)
      .setOrigin(1, 0);
    var p1Name=this.add
    .image(
      (this.game.renderer.width * 2.5) / 10,
      (this.game.renderer.height * 0.4) / 10,
      "jugador1"
    );
    var p1Icon = this.add
      .image(
        (this.game.renderer.width * 0.8) / 10,
        (this.game.renderer.height * 0.8) / 10,
        "PlayerIcon"
      )
      .setDepth(1000)
      .setScale(0.1)
      .setTint(this.tint1);

      var p1Name=this.add
    .image(
      (this.game.renderer.width * 7.5) / 10,
      (this.game.renderer.height * 0.4) / 10,
      "jugador2"
    );
    var p2Icon = this.add
      .image(
        (this.game.renderer.width * 9.2) / 10,
        (this.game.renderer.height * 0.8) / 10,
        "PlayerIcon"
      )
      .setDepth(1000)
      .setScale(0.1)
      .setTint(this.tint2);
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

       //colision de personaje 1 con power up
       powerUpCollider1 = this.physics.add.overlap(GameManager.character.bottomSprite, GameManager.item1.sprite, this.checkItem);
       //colision de personaje 2 con power up
       powerUpCollider2 = this.physics.add.overlap(GameManager.character2.bottomSprite, GameManager.item1.sprite, this.checkItem2);

    //colision entre tankes
    this.physics.add.collider(
      GameManager.character.bottomSprite,
      GameManager.character2.bottomSprite
    );
    //colision de las balas del personaje 2 con las cajas de madera
    this.physics.add.collider(GameManager.woodenCrates, GameManager.bulletGroup2, this.obstacleHit);
    this.physics.add.overlap(GameManager.woodenCrates, GameManager.bulletGroup2, this.antiCamp);
    //colision de las balas del personaje 1 con las cajas de madera
    this.physics.add.collider(GameManager.woodenCrates, GameManager.bulletGroup1, this.obstacleHit);
    this.physics.add.overlap(GameManager.woodenCrates, GameManager.bulletGroup1, this.antiCamp);
    //colision de las balas del personaje 2 con las cajas de hierro
    this.physics.add.collider(GameManager.ironCrates, GameManager.bulletGroup2, this.obstacleHit);
    this.physics.add.overlap(GameManager.ironCrates, GameManager.bulletGroup2, this.antiCamp);
    //colision de las balas del personaje 1 con las cajas de hierro
    this.physics.add.collider(GameManager.ironCrates, GameManager.bulletGroup1, this.obstacleHit);
    this.physics.add.overlap(GameManager.ironCrates, GameManager.bulletGroup1, this.antiCamp);

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
      this.sound.play("tankMovement");
    } else if (this.cursors.right.isDown) {
      GameManager.character.moveRight();
      this.sound.play("tankMovement");
    } else {
      GameManager.character.stopX();
    }
    if (this.cursors.up.isDown) {
      GameManager.character.moveUp();
      this.sound.play("tankMovement");
    } else if (this.cursors.down.isDown) {
      GameManager.character.moveDown();
      this.sound.play("tankMovement");
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
      this.sound.play("tankMovement");
    } else if (this.cursors2.right.isDown) {
      GameManager.character2.moveRight();
      this.sound.play("tankMovement");
    } else {
      GameManager.character2.stopX();
    }
    if (this.cursors2.up.isDown) {
      GameManager.character2.moveUp();
      this.sound.play("tankMovement");
    } else if (this.cursors2.down.isDown) {
      GameManager.character2.moveDown();
      this.sound.play("tankMovement");
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

  updateUI() {
    var hitsLeft = Math.ceil(
      (Math.ceil(GameManager.character.maxHP / GameManager.character.dmgTakenOnHit) *
        GameManager.character.healthPoints) /
        GameManager.character.maxHP
    );
    //console.log("1" , hitsLeft);
    if (hitsLeft <= 0) {
      GameManager.p1HpBar.destroy();
    } else {
      GameManager.p1HpBar.destroy();
      GameManager.p1HpBar = this.add
        .image(
          (this.game.renderer.width * 1.2) / 10,
          (this.game.renderer.height * 0.4) / 10,
          "LeftLife" + hitsLeft
        )
        .setDepth(999)
        .setScale(0.2)
        .setOrigin(0, 0);
    }

    hitsLeft = Math.ceil(
      (Math.ceil(GameManager.character2.maxHP / GameManager.character2.dmgTakenOnHit) *
        GameManager.character2.healthPoints) /
        GameManager.character2.maxHP
    );
    //console.log("2" , hitsLeft);
    if (hitsLeft <= 0) {
      GameManager.p2HpBar.destroy();
    } else {
      GameManager.p2HpBar.destroy();
      GameManager.p2HpBar = this.add
        .image(
          (this.game.renderer.width * 8.8) / 10,
          (this.game.renderer.height * 0.4) / 10,
          "RightLife" + hitsLeft
        )
        .setDepth(999)
        .setScale(0.2)
        .setOrigin(1, 0);
    }
  }

  checkGameOver(localMode) {
    if (GameManager.character.healthPoints <= 0) {
      var winner = GameManager.character2;
      this.scene.pause();
      this.sound.stopByKey("BattleMusic");
      this.scene.launch("VictoryScene", {
        winner,
      });
    }
    if (GameManager.character2.healthPoints <= 0) {
      var winner = GameManager.character;
      this.scene.pause();
      this.sound.stopByKey("BattleMusic");
      this.scene.launch("VictoryScene", {
        winner,
      });
    }
  }

  countdown(touched){
    if(touched === true){
      if(timerCreated === false){
        timer = this.time.addEvent({      
          delay: 10000,
        });  
        timerCreated = true;
      }else if(timerCreated === true){
        text.setText(Math.floor(0.001 * (timer.delay - timer.elapsed)));
        if(timer.delay - timer.elapsed === 0){                     
          timer = -1;
          touched = false;                   
          if(speedUp.setVisible){
            speedUp.setVisible(false);
            GameManager.character2.velocity = 200;
                         
          }if(speedDown.setVisible){
            speedDown.setVisible(false);
            GameManager.character.velocity = 200;
            
          }              
        }    
      }
    }
  } 

  countdown2(touched2){
    if(touched2 === true){
      if(timerCreated2 === false){
        timer2 = this.time.addEvent({      
          delay: 10000,
        });  
        timerCreated2 = true;
      }else if(timerCreated2 === true){
        text2.setText(Math.floor(0.001 * (timer2.delay - timer2.elapsed)));        
        if(timer2.delay - timer2.elapsed === 0){
          timer2 = -1;
          touched2 === false;                 
          if(speedUp2.setVisible){
            speedUp2.setVisible(false);
            GameManager.character2.velocity = 200;                        
          }
          if(speedDown2.setVisible){
            speedDown2.setVisible(false);
            GameManager.character.velocity = 200; 
            
          }
        }   
      } 
    }    
  }
  


  spawnItem(itemDestroyed){
    if(itemDestroyed === true){
      if(timerItemCreated === false){
        timerItem = this.time.addEvent({      
          delay: 11000,
        });  
        timerItemCreated = true;
      }else if((timerItem.delay - timerItem.elapsed) === 0){  
        timerItem = -1;
        var randomValue = Math.round(Math.random()*2);
        itemDestroyed = false;
        switch (randomValue){
          case 0:           
            powerUpCollider1 = this.physics.add.overlap(GameManager.character.bottomSprite, GameManager.item1.sprite, this.checkItem);
            powerUpCollider2 = this.physics.add.overlap(GameManager.character2.bottomSprite, GameManager.item1.sprite, this.checkItem2);
            GameManager.item1.sprite = this.physics.add.sprite(GameManager.item1.xPos, GameManager.item1.yPos, "SpeedUp");
            GameManager.item1.sprite.anims.play("SpeedUp_animation");
            GameManager.item1.id = 0;            
            break;
          case 1:           
            powerUpCollider1 = this.physics.add.overlap(GameManager.character.bottomSprite, GameManager.item1.sprite, this.checkItem);
            powerUpCollider2 = this.physics.add.overlap(GameManager.character2.bottomSprite, GameManager.item1.sprite, this.checkItem2);
            GameManager.item1.sprite = this.physics.add.sprite(GameManager.item1.xPos, GameManager.item1.yPos, "SpeedDown");
            GameManager.item1.sprite.anims.play("SpeedDown_animation");
            GameManager.item1.id = 1;            
            break;
          case 2:           
            powerUpCollider1 = this.physics.add.overlap(GameManager.character.bottomSprite, GameManager.item1.sprite, this.checkItem);
            powerUpCollider2 = this.physics.add.overlap(GameManager.character2.bottomSprite, GameManager.item1.sprite, this.checkItem2);
            GameManager.item1.sprite = this.physics.add.sprite(GameManager.item1.xPos, GameManager.item1.yPos, "Shield");
            GameManager.item1.sprite.anims.play("Shield_animation");
            GameManager.item1.id = 2;
            break;
        }            
      }
    }
  }

  //Funciones de colisiones
  tankHit1(tank, bullet) {
    GameManager.character.getHit();
    if(GameManager.character.shield === 0){
      shield.setActive(false);
    }
    bullet.destroy();
  }
  tankHit2(tank, bullet) {
    GameManager.character2.getHit();
    if(GameManager.character2.shield === 0){
      shield2.setActive(false);
    }
    bullet.destroy();
  }

  bulletsHit(bullet1, bullet2) {
    bullet1.destroy();
    bullet2.destroy();
  }

  obstacleHit(obstacle, bullet) {
    obstacle.getHit(Math.floor(Math.random() * 2 + 1));
    bullet.bounce();
  }
  antiCamp(obstacle, bullet) {
    bullet.destroy();
  }
  checkItem(character, item1){    
    switch(GameManager.item1.id){
      case 0:
       
          GameManager.character.velocity = 350;
          GameManager.item1.sprite.setScale(0);
          powerUpCollider1.destroy();
          powerUpCollider2.destroy();
          speedUp.setVisible(true);
          touched = true;
          timerCreated = false;  
          timerItemCreated = false;
          itemDestroyed = true; 
          
        
        break;
      case 1:
        
          GameManager.character2.velocity = 100;
          GameManager.item1.sprite.setScale(0);
          powerUpCollider1.destroy();
          powerUpCollider2.destroy();
          speedDown.setVisible(true);
          touched = true;
          timerCreated2 = false; 
          timerItemCreated = false;  
          itemDestroyed = true;
         
        
        break;
      case 2:
        GameManager.character.shield = 30;
        GameManager.item1.sprite.setScale(0);
        powerUpCollider1.destroy();
        powerUpCollider2.destroy();
        shield.setVisible(true);
        timerItemCreated = false;
        itemDestroyed = true; 
        break;
    
  }
}
    
checkItem2(Item){
  
    switch(GameManager.item1.id){
      case 0:
        
          GameManager.character2.velocity = 350;
          GameManager.item1.sprite.setScale(0);
          powerUpCollider1.destroy();
          powerUpCollider2.destroy();
          speedUp2.setVisible(true);
          touched2 = true;
          timerCreated2 = false; 
          timerItemCreated = false; 
          itemDestroyed = true;
         
        
        break;
      case 1:
        
          GameManager.character.velocity = 100;
          GameManager.item1.sprite.setScale(0);
          powerUpCollider1.destroy();
          powerUpCollider2.destroy();
          speedDown2.setVisible(true);
          touched2 = true;
          timerCreated = false; 
          timerItemCreated = false;  
          itemDestroyed = true;
          
        
        break;
      case 2:
        GameManager.character2.shield = 30;
        GameManager.item1.sprite.setScale(0);
        powerUpCollider1.destroy();
        powerUpCollider2.destroy();
        shield2.setVisible(true);
        timerItemCreated = false;
        itemDestroyed = true; 
        break;
    }   
  }
}
