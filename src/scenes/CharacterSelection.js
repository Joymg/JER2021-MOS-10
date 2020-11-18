class CharacterSelection extends Phaser.Scene {
  constructor() {
    super({ key: "CharacterSelection" });
    console.log("CharacterSelection#constructor");
    this.ready = false;
  }

  init() {
    console.log("CharacterSelection#init");
  }

  preload() {
    this.load.image("sky", "../assets/sky.png");
    this.load.image("ready", "../assets/platform.png");
    this.load.image("back", "../assets/star.png");
    this.load.image("Aricato", "/assets/card.png");
    this.load.image("Catsudon", "/assets/card.png");
    this.load.image("Tankitty", "/assets/card.png");
    this.load.image("Catígula", "/assets/card.png");
    this.load.image("Catótico", "/assets/card.png");
    this.load.image("arrow", "/assets/bomb.png");
  }

  create() {
    this.add.image(400, 300, "sky").setTint(0xf23456);
    let backButton = this.add.image(
      (this.game.renderer.width * 9) / 10,
      this.game.renderer.height / 10,
      "back"
    );
    backButton.scale = 3;

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

    //Carousel
    const graphics = this.add.graphics({
      lineStyle: { width: 2, color: 0x0f0f0f },
    });
    const ellipse = new Phaser.Curves.Ellipse({
      x: 400,
      y: 300,
      xRadius: 240,
      yRadius: 100,
    });

    var poly = new Phaser.Geom.Polygon([
      new Phaser.Geom.Point(125, 250),
      new Phaser.Geom.Point(175, 325),
      new Phaser.Geom.Point(400, 350),
      new Phaser.Geom.Point(625, 325),
      new Phaser.Geom.Point(675, 250),
    ]);

    let minY = poly.points.reduce(
      (prev, current) => (current.y <= prev ? current.y : prev),
      poly.points[0].y
    );
    let maxY = poly.points.reduce(
      (prev, current) => (current.y >= prev ? current.y : prev),
      poly.points[0].y
    );

    const scaleRange = 0.6 / (maxY - minY);

    const Aricato = this.add.image(
      poly.points[0].x,
      poly.points[0].y,
      "Aricato"
    );
    const Catsudon = this.add
      .image(poly.points[1].x, poly.points[1].y, "Catsudon")
      .setTint(0x76ab10);
    const Tankitty = this.add
      .image(poly.points[2].x, poly.points[2].y, "Tankitty")
      .setTint(0x1b5c82);
    const Catígula = this.add
      .image(poly.points[3].x, poly.points[3].y, "Catígula")
      .setTint(0x000000);
    const Catótico = this.add
      .image(poly.points[4].x, poly.points[4].y, "Catótico")
      .setTint(0x00aaff);
    var CharacterSprites = [Aricato, Catsudon, Tankitty, Catígula, Catótico];

    CharacterSprites.forEach((element) => {
      element.setAngle(90);
      element.setScale(1 + scaleRange * (element.y - minY));
      element.setDepth(element.y);
    });

    graphics.strokePoints(poly.points);

    //End of carrousel
    let rightCharacButton = this.add.image(
      this.game.renderer.width / 10,
      (this.game.renderer.height * 8.5) / 10,
      "arrow"
    );
    rightCharacButton.setDepth(1000);
    rightCharacButton.setAngle(90);
    rightCharacButton.scale = 5;

    rightCharacButton.setInteractive();
    rightCharacButton.on("pointerover", () => {
      rightCharacButton.setTint(0x00a0af);
    });
    rightCharacButton.on("pointerout", () => {
      rightCharacButton.setTint();
    });
    rightCharacButton.on("pointerdown", () => {
      poly.points.forEach((p, index) => {
        const firstPoint = index === 0;

        const sprite = CharacterSprites[index];
        const point = firstPoint
          ? poly.points[poly.points.length - 1]
          : poly.points[index - 1];

        const x = point.x;
        const y = point.y;
        this.tweens.add({
          targets: sprite,
          x,
          y,
          ease: "Cubic",
          duration: 300,

          onUpdate: (tween, target) => {
            if (point.x == 400)
              this.tweens.add({
                targets: sprite,
                scale: 3,
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
      Phaser.Utils.Array.RotateRight(poly.points);
    });

    let leftCharacButton = this.add.image(
      (this.game.renderer.width * 9) / 10,
      (this.game.renderer.height * 8.5) / 10,
      "arrow"
    );
    leftCharacButton.setDepth(1000);
    leftCharacButton.setAngle(-90);
    leftCharacButton.scale = 5;

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
            if (point.x == 400)
              this.tweens.add({
                targets: sprite,
                scale: 3,
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
      this.scene.start("GameplayScene");
    });
  }

  update() {
    console.log("CharacterSelection#update");
  }
}
