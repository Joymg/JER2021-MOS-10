/* let connection;
let wsUrl = origin.split("/")[2];

function startConection(){
  connection = new WebSocket("ws://" + wsUrl + "/player");
}

connection.onerror = function (e) {
  console.log("WS error: " + e);
};
connection.onmessage = function (msg) {
  //console.log("WS message: " + msg.data);
  let serverMsg = JSON.parse(msg.data);
  //console.log("🚀 ~ file: WebSocket.js ~ line 10 ~ serverMsg", serverMsg)
  switch (serverMsg.id) {
    case 0:
      clientGame = serverMsg.gameId;
      //console.log("🚀 ~ file: WebSocket.js ~ line 14 ~ clientGame", clientGame)
      clientIdInGame = serverMsg.character;
      //console.log("🚀 ~ file: WebSocket.js ~ line 16 ~ clientIdInGame", clientIdInGame)
      break;
    case 1:
      oponentInputs = serverMsg;
      break;
    case 2:
      this.scene.launch("DisconnectScene");
      break;
    case 3:
      this.scene.start("GameplayScene");
      break;
  }
};

connection.onclose = function () {
  console.log("Closing socket");
};
 */