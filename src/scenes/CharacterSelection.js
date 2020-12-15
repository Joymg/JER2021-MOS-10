class CharacterSelection extends Phaser.Scene {
  constructor() {
    super({ key: "CharacterSelection" });
    console.log("CharacterSelection#constructor");

    this.ready = false;
    this.player1locked = false;
    this.player1Character;
    this.player2Character;
  }

  init(data) {
    this.player1locked = data.player2Turn;
    this.player1Character = data.p1Char;
  }

  create() {
    var background = this.add.image(
      this.game.renderer.width / 2,
      this.game.renderer.height / 2,
      "backSelec"
    );
    var text;
    if (!this.player1locked) {
      text = this.add
        .image(this.game.renderer.width / 2, (this.game.renderer.height * 1) / 10, "jugador1")
        .setScale(2);
    } else {
      text = this.add
        .image(this.game.renderer.width / 2, (this.game.renderer.height * 1) / 10, "jugador2")
        .setScale(2);
    }

    //Carousel
    const graphics = this.add.graphics({
      lineStyle: { width: 2, color: 0x0f0f0f },
    });

    var poly = new Phaser.Geom.Polygon([
      new Phaser.Geom.Point(
        this.game.renderer.width / 2 - this.game.renderer.width / 2.5,
        this.game.renderer.height / 2 - this.game.renderer.height / 8
      ),
      new Phaser.Geom.Point(
        this.game.renderer.width / 2 - this.game.renderer.width / 3.5,
        this.game.renderer.height / 2
      ),
      new Phaser.Geom.Point(
        this.game.renderer.width / 2,
        this.game.renderer.height / 2 + this.game.renderer.height / 23
      ),
      new Phaser.Geom.Point(
        this.game.renderer.width / 2 + this.game.renderer.width / 3.5,
        this.game.renderer.height / 2
      ),
      new Phaser.Geom.Point(
        this.game.renderer.width / 2 + this.game.renderer.width / 2.5,
        this.game.renderer.height / 2 - this.game.renderer.height / 8
      ),
    ]);

    //punto con la y mas pequeña de los puntos del poligono
    let minY = poly.points.reduce(
      (prev, current) => (current.y <= prev ? current.y : prev),
      poly.points[0].y
    );
    //punto con la y mas grande de los puntos del poligono
    let maxY = poly.points.reduce(
      (prev, current) => (current.y >= prev ? current.y : prev),
      poly.points[0].y
    );

    //constante que calcula el tamaño basado en la la y maxima y minima
    const scaleRange = 0.05 / (maxY - minY);

    const Aricato = this.add.image(poly.points[0].x, poly.points[0].y, "Aricato");
    //si el jugador 1 ha elegido este personaje este se pinta de negro y se desactiva para que no pueda ser elegido por el jugador 2
    if (this.player1Character != null && Aricato.texture.key == this.player1Character.texture.key) {
      Aricato.setTint(0x202020);
      Aricato.setActive(false);
    }

    const Catsudon = this.add
      .image(poly.points[1].x, poly.points[1].y, "Catsudon")
      .setTint(0xff97ad);
    //si el jugador 1 ha elegido este personaje este se pinta de negro y se desactiva para que no pueda ser elegido por el jugador 2
    if (this.player1Character && Catsudon.texture.key == this.player1Character.texture.key) {
      Catsudon.setTint(0x202020);
      Catsudon.setActive(false);
    }

    const Tankitty = this.add
      .image(poly.points[2].x, poly.points[2].y, "Tankitty")
      .setTint(0xbaff97);
    //si el jugador 1 ha elegido este personaje este se pinta de negro y se desactiva para que no pueda ser elegido por el jugador 2
    if (this.player1Character && Tankitty.texture.key == this.player1Character.texture.key) {
      Tankitty.setTint(0x202020);
      Tankitty.setActive(false);
    }

    const Catigula = this.add
      .image(poly.points[3].x, poly.points[3].y, "Catígula")
      .setTint(0xb797ff);
    //si el jugador 1 ha elegido este personaje este se pinta de negro y se desactiva para que no pueda ser elegido por el jugador 2
    if (this.player1Character && Catigula.texture.key == this.player1Character.texture.key) {
      Catigula.setTint(0x202020);
      Catigula.setActive(false);
    }

    const Catotico = this.add
      .image(poly.points[4].x, poly.points[4].y, "Catótico")
      .setTint(0xfff297);
    //si el jugador 1 ha elegido este personaje este se pinta de negro y se desactiva para que no pueda ser elegido por el jugador 2
    if (this.player1Character && Catotico.texture.key == this.player1Character.texture.key) {
      Catotico.setTint(0x202020);
      Catotico.setActive(false);
    }

    var CharacterSprites = [Aricato, Catsudon, Tankitty, Catigula, Catotico];

    //coloca los elementos en posicion para ser representados en el carrusel
    CharacterSprites.forEach((element) => {
      element.setScale(0.08 + scaleRange * (element.y - minY)); //los hace mas grande cuanto mas adelante esten
      element.setDepth(element.y); //y les pone por encima de las cosas cuya y sea menor
    });

    //End of carrousel

    //botones
    //boton de mover a la izda
    let rightCharacButton = this.add.image(
      (this.game.renderer.width * 9) / 10,
      (this.game.renderer.height * 8.5) / 10,
      "Button_Right"
    );
    rightCharacButton.setDepth(1000);
    rightCharacButton.setScale(0.3);

    rightCharacButton.setInteractive();
    //efectos al pasar el raton por encima
    rightCharacButton.on("pointerover", () => {
      rightCharacButton.setTint(0x909090);
      rightCharacButton.setScale(0.32);
    });
    rightCharacButton.on("pointerout", () => {
      rightCharacButton.setTint();
      rightCharacButton.setScale(0.3);
    });
    //al pulsar el boton rota el carrousel hacia la derecha
    rightCharacButton.on("pointerdown", () => {
      poly.points.forEach((p, index) => {
        const firstPoint = index === 0;

        const sprite = CharacterSprites[index];
        const point = firstPoint ? poly.points[poly.points.length - 1] : poly.points[index - 1];

        const x = point.x;
        const y = point.y;
        this.tweens.add({
          targets: sprite,
          x,
          y,
          ease: "Cubic",
          duration: 300,

          onUpdate: (tween, target) => {
            if (point.x == this.game.renderer.width / 2)
              this.tweens.add({
                targets: sprite,
                scale: 0.2,
                ease: "Linear",
                duration: 150,
              });
            else
              this.tweens.add({
                targets: sprite,
                scale: 0.08 + scaleRange * (target.y - minY),
                ease: "Linear",
                duration: 150,
              });

            sprite.setDepth(target.y);
          },
        });
      });
      Phaser.Utils.Array.RotateRight(poly.points);
    });

    //boton de mover a la izda
    let leftCharacButton = this.add.image(
      this.game.renderer.width / 10,
      (this.game.renderer.height * 8.5) / 10,
      "Button_Left"
    );
    leftCharacButton.setDepth(1000);
    leftCharacButton.setScale(0.3);

    leftCharacButton.setInteractive();
    leftCharacButton.on("pointerover", () => {
      leftCharacButton.setTint(0x909090);
      leftCharacButton.setScale(0.32);
    });
    leftCharacButton.on("pointerout", () => {
      leftCharacButton.setTint();
      leftCharacButton.setScale(0.3);
    });
    leftCharacButton.on("pointerdown", () => {
      poly.points.forEach((p, index) => {
        const finalPoint = index === poly.points.length - 1;

        const sprite = CharacterSprites[index];
        const point = finalPoint ? poly.points[0] : poly.points[index + 1];

        const x = point.x;
        const y = point.y;
        this.tweens.add({
          targets: sprite,
          x,
          y,
          ease: "Cubic",
          duration: 300,
          onUpdate: (tween, target) => {
            if (point.x == this.game.renderer.width / 2)
              this.tweens.add({
                targets: sprite,
                scale: 0.2,
                ease: "Linear",
                duration: 150,
              });
            else
              this.tweens.add({
                targets: sprite,
                scale: 0.08 + scaleRange * (target.y - minY),
                ease: "Linear",
                duration: 100,
              });

            sprite.setDepth(target.y);
          },
        });
      });
      Phaser.Utils.Array.RotateLeft(poly.points);
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
      backButton.setScale(0.32);
    });
    backButton.on("pointerout", () => {
      backButton.setTint();
      backButton.setScale(0.3);
    });
    backButton.on("pointerdown", () => {
      if (!this.player1locked) {
        this.scene.start("MainMenu");
      } else {
        var player2Turn = false;
        var p1Char = null;
        this.scene.start("CharacterSelection", { player2Turn, p1Char });
      }
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
      if (!this.player1locked) {
        this.player1Character = this.getSelectedCharacter(CharacterSprites);
      } else {
        this.player2Character = this.getSelectedCharacter(CharacterSprites);
      }

      if (game.config.localMode) {
        if (!this.player1locked) {
          var player2Turn = true;
          var p1Char = this.player1Character;
          this.scene.start("CharacterSelection", { player2Turn, p1Char });
        } else {
          if (this.player2Character) {
            this.sound.stopByKey("MenuMusic");
            var tint1 = this.player1Character.tintTopLeft;
            var tint2 = this.player2Character.tintTopLeft;
            console.log(this.player1Character.texture.key, tint1);
            console.log(this.player2Character.texture.key, tint2);
            this.scene.start("GameplayScene", { tint1, tint2 });
          }
        }
      } else {
        //Todo: modo en linea. al elegir un solo jugador carga la partida
      }
    });
  }

  transitionOut(progress) {
    this.logo.y = 600 * progress;
  }

  getSelectedCharacter(array) {
    var player;
    array.forEach((element) => {
      if (element.active == true) {
        console.log(element.texture.key, element.tintTopLeft);
        if (element.y == this.game.renderer.height / 2 + this.game.renderer.height / 23) {
          player = element;
        }
      }
    });
    return player;
  }
}
