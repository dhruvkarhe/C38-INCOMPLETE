class Player {
  constructor() {
    this.name = null;
    this.distance = 0;
    this.index = null;
  }

  getCount() {
    var playerCountRef = database.ref("playerCount");
    playerCountRef.on("value", function (data) {
      playerCount = data.val();
    });
  }
  updateCount(count) {
    database.ref("/").update({
      playerCount: count,
    });
  }

  update() {
    var playerIndex = "players/player" + this.index;
    database.ref(playerIndex).set({
      name1: this.name,
      distance: this.distance,
    });
  }

  static getPlayerInfo() {
    var PlayerInfoRef = database.ref("players");
    playerInfoRef.on("value", (data) => {
      allPlayers = data.val();
    });
  }
}
