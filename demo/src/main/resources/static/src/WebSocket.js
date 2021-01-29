let wsUrl = "127.0.0.1:8080";
connection = new WebSocket("ws://" + wsUrl + "/player");

connection.onerror = function (e) {
  console.log("WS error: " + e);
};
connection.onmessage = function (msg) {
  console.log("WS message: " + msg.data);
};

connection.onclose = function () {
  console.log("Closing socket");
};

$("#send-btn").click(function () {
  var message = $("#msg").val();
  connection.send(JSON.stringify(message));
  $("#msg").val("");
});
