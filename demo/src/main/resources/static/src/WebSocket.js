let wsUrl = "127.0.0.1:8080";
 let connection = new WebSocket("ws://" + wsUrl + "/player");

connection.onerror = function (e) {
  console.log("WS error: " + e);
};
connection.onmessage = function (msg) {
  console.log("WS message: " + msg.data);
  let serverMsg = JSON.parse(msg.data);
  console.log("🚀 ~ file: WebSocket.js ~ line 10 ~ serverMsg", serverMsg)
  switch (serverMsg.id) {
    case 0:
      clientGame = serverMsg.gameId;
      console.log("🚀 ~ file: WebSocket.js ~ line 14 ~ clientGame", clientGame)
      clientIdInGame = serverMsg.character;
      console.log("🚀 ~ file: WebSocket.js ~ line 16 ~ clientIdInGame", clientIdInGame)
      break;
    case 1:
      oponentInputs = serverMsg;
      break
  }
};

connection.onclose = function () {
  console.log("Closing socket");
};

