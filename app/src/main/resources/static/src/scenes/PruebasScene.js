class PruebasScene extends Phaser.Scene {
  constructor() {
    super({ key: "PruebasScene" });
    const gm = new GameManager(this);
  }

  create() {
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

    const map = this.make.tilemap({ key: "map2" });
    const tileset = map.addTilesetImage("Tileset_64", "FloorTileset_64");
    const floor = map.createStaticLayer("Suelo", tileset, 0, 0);
    const ironCrates = map.getObjectLayer("IronCrates");
    const woodenCrates = map.getObjectLayer("WoodenCrates");
    const pits = map.getObjectLayer("Pits");

    ironCrates.objects.forEach((objData) => {
      const { x, y, name } = objData;

      switch (name) {
        case "IronCrate":
          GameManager.ironCrates.create(x, y);
          break;
      }
    });

    woodenCrates.objects.forEach((objData) => {
      const { x, y, name } = objData;

      switch (name) {
        case "WoodenCrate":
          GameManager.woodenCrates.create(x, y);
          break;
      }
    });

    pits.objects.forEach((objData) => {
      const { x, y, name } = objData;

      switch (name) {
        case "Pit":
          GameManager.pits.create(x, y);
          break;
      }
    });
    
    if (ready) {
      var timer = this.time.addEvent({
        delay: 500, // ms
        callback: checkServer,
        loop: true,
      });
    }
  }
}
