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
    var background;
    if (!this.player1locked) {
      background = this.add
        .image(this.game.renderer.width / 2, this.game.renderer.height / 2, "sky")
        .setTint(0xf23456)
        .setScale(1.3);
    } else {
      background = this.add
        .image(this.game.renderer.width / 2, this.game.renderer.height / 2, "sky")
        .setTint(0x65432f)
        .setScale(1.3);
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
        this.game.renderer.height / 2 + this.game.renderer.height / 8
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
    const scaleRange = 1.8 / (maxY - minY);

    const Aricato = this.add.image(poly.points[0].x, poly.points[0].y, "Aricato");
    //si el jugador 1 ha elegido este personaje este se pinta de negro y se desactiva para que no pueda ser elegido por el jugador 2
    if (this.player1Character != null && Aricato.texture.key == this.player1Character.texture.key) {
      Aricato.setTint(0x00ff00);
      Aricato.setActive(false);
    }

    const Catsudon = this.add
      .image(poly.points[1].x, poly.points[1].y, "Catsudon")
      .setTint(0xaa9930);
    //si el jugador 1 ha elegido este personaje este se pinta de negro y se desactiva para que no pueda ser elegido por el jugador 2
    if (this.player1Character && Catsudon.texture.key == this.player1Character.texture.key) {
      Catsudon.setTint(0x00ff00);
      Catsudon.setActive(false);
    }

    const Tankitty = this.add
      .image(poly.points[2].x, poly.points[2].y, "Tankitty")
      .setTint(0x1b5c82);
    //si el jugador 1 ha elegido este personaje este se pinta de negro y se desactiva para que no pueda ser elegido por el jugador 2
    if (this.player1Character && Tankitty.texture.key == this.player1Character.texture.key) {
      Tankitty.setTint(0x00ff00);
      Tankitty.setActive(false);
    }

    const Catigula = this.add
      .image(poly.points[3].x, poly.points[3].y, "Catígula")
      .setTint(0x555555);
    //si el jugador 1 ha elegido este personaje este se pinta de negro y se desactiva para que no pueda ser elegido por el jugador 2
    if (this.player1Character && Catigula.texture.key == this.player1Character.texture.key) {
      Catigula.setTint(0x00ff00);
      Catigula.setActive(false);
    }

    const Catotico = this.add
      .image(poly.points[4].x, poly.points[4].y, "Catótico")
      .setTint(0x00aaff);
    //si el jugador 1 ha elegido este personaje este se pinta de negro y se desactiva para que no pueda ser elegido por el jugador 2
    if (this.player1Character && Catotico.texture.key == this.player1Character.texture.key) {
      Catotico.setTint(0x00ff00);
      Catotico.setActive(false);
    }

    var CharacterSprites = [Aricato, Catsudon, Tankitty, Catigula, Catotico];

    //coloca los elementos en posicion para ser representados en el carrusel
    CharacterSprites.forEach((element) => {
      element.setAngle(90); //los gira
      element.setScale(1 + scaleRange * (element.y - minY)); //los hace mas grande cuanto mas adelante esten
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
      rightCharacButton.setTint(0x00a0af);
    });
    rightCharacButton.on("pointerout", () => {
      rightCharacButton.setTint();
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
                scale: 3.5,
                ease: "Linear",
                duration: 150,
              });
            else
              this.tweens.add({
                targets: sprite,
                scale: 1 + scaleRange * (target.y - minY),
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
      leftCharacButton.setTint(0x00a0af);
    });
    leftCharacButton.on("pointerout", () => {
      leftCharacButton.setTint();
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
                scale: 3.5,
                ease: "Linear",
                duration: 150,
              });
            else
              this.tweens.add({
                targets: sprite,
                scale: 1 + scaleRange * (target.y - minY),
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
      backButton.setTint(0x00a0af);
    });
    backButton.on("pointerout", () => {
      backButton.setTint();
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
    let lockCharac = this.add.image(
      this.game.renderer.width / 2,
      (this.game.renderer.height * 8.5) / 10,
      "ready"
    );
    lockCharac.setDepth(1000);

    lockCharac.setInteractive();
    lockCharac.on("pointerover", () => {
      lockCharac.setTint(0x00a0af);
    });
    lockCharac.on("pointerout", () => {
      lockCharac.setTint();
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
            this.scene.start("GameplayScene");
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
        if (element.y == this.game.renderer.height / 2 + this.game.renderer.height / 8) {
          player = element;
        }
      }
    });
    return player;
  }
}
