//esto simplemente es para hacerlo un poco bonito e intuitivo
var failed = false;

//esto es para que el chat se vea "bonito"
var displayName;
var lastName;
var lastMessage;

let url = window.location.origin;

function postPetition() {
  ready = true;

  displayName = $("#nickName").val();
  if (displayName != "") {
    let request = {
      nickName: $("#nickName").val(),
    };
    $.ajax({
      method: "POST",
      url: url + "/players",
      data: JSON.stringify(request),
      headers: {
        "Content-type": "application/json; charset=UTF-8", // Indica el contenido
      },
    })
      .done((data) => {
        actualPlayerID = data.id;
        serverOnline = true;
      })
      .fail((jqXHR, Status, errorThrown) => {
        console.log(errorThrown);
      });

    document.getElementById("login").style.display = "none";
    document.getElementById("centro").style.display = "block";
    document.getElementById("controles").style.visibility = "visible";
    document.getElementById("chatBox").style.display = "block";
  } else if (!failed) {
    $("#login").append("<br><p id='mess'>Debes introducir un nombre para poder jugar</p>");
    failed = true;
  }
}

function postMessage() {
  var writtenMessage = $("#message").val();
  if (writtenMessage != null) {
    let request = {
      name: displayName,
      message: $("#message").val(),
    };
    $.ajax({
      method: "POST",
      url: url + "/chat",
      data: JSON.stringify(request),
      headers: {
        "Content-type": "application/json; charset=UTF-8", // Indica el contenido
      },
    })
      .done((data) => {
      })
      .fail((jqXHR, Status, errorThrown) => {
        console.log(errorThrown);
      });
    //$("#chatHistory").append("<p><b><i>(enviando...) </i>" + displayName + ": </b>" + writtenMessage + "</p>");
  }
}

function postirstMessage() {
  var writtenMessage = $("#message").val();
  if (writtenMessage != null) {
    let request = {
      name: displayName,
      message: $("#message").val(),
    };
    $.ajax({
      method: "POST",
      url: url + "/chat",
      data: JSON.stringify(request),
      headers: {
        "Content-type": "application/json; charset=UTF-8", // Indica el contenido
      },
    })
      .done((data) => {
      })
      .fail((jqXHR, Status, errorThrown) => {
        console.log(errorThrown);
      });
    //$("#chatHistory").append("<p><b><i>(enviando...) </i>" + displayName + ": </b>" + writtenMessage + "</p>");
  }
}

function postLastMessage() {
  if (lastMessage != null) {
    let request = {
      name: lastName,
      message: lastMessage,
    };
    $.ajax({
      method: "POST",
      url: url + "/chat",
      data: JSON.stringify(request),
      headers: {
        "Content-type": "application/json; charset=UTF-8", // Indica el contenido
      },
    })
      .done((data) => {
      })
      .fail((jqXHR, Status, errorThrown) => {
        console.log(errorThrown);
      });
    $("#chatHistory").append("<p><b>" + lastName + ": </b>" + lastMessage + "</p>");
  }
}

function getMessage() {
  $.ajax({
    url: url + "/chat",
  })
    .done(function (data) {
      if (data.toString()  !=  "") {
        if (lastMessage != data[data.length - 1].message) {
          lastName = data[data.length - 1].name;
          lastMessage = data[data.length - 1].message;
          postLastMessage();
        }
      }
    })
    .fail((jqXHR, Status, errorThrown) => {
      console.log(errorThrown);
    });
}

function checkServer() {
  if (serverOnline) {
    updatePlayer();
    getPlayer();
    getMessage();
    document.getElementById("onlinePlayers").innerHTML = "Jugadores En Linea: " + activePlayers;
  } else {
    postPetition();
    document.getElementById("onlinePlayers").innerHTML = "Offline";
  }
}

//Check player connection
function checkPlayer() {
  getPlayer();
}

//! JQuery
//Get players from server
function getPlayer() {
  $.ajax({
    url: url + "/players",
  })
    .done(function (players) {
      serverNotRespond = 0;
      activePlayers = players;
    })
    .fail((jqXHR, Status, errorThrown) => {
      serverNotRespond++;
      console.log(errorThrown);
    });
}

//Update player in server
function updatePlayer() {
  let request = {
    nickName: $("#nickName").val(),
  };
  $.ajax({
    method: "PUT",
    url: url + "/players/" + actualPlayerID,
    data: JSON.stringify(request),
    processData: false,
    headers: {
      "Content-Type": "application/json",
    },
  })
    .done(function (player) {
      serverNotRespond = 0;
    })
    .fail((jqXHR, Status, errorThrown) => {
      serverNotRespond++;
      if (serverNotRespond > 3) {
        serverOnline = false;
      }
    });
}

//Delete player from server
function deletePlayer(playerID) {
  $.ajax({
    method: "DELETE",
    url: url + "/players/" + playerID,
  }).done(function (playerID) {
  });
}

//listen new message
function messageListener() {
  auxName = displayName;
  auxMessage = $("#message").val();
}
