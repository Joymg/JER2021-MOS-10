
$(document).ready(function(){
    console.log("El DOM está cargado")
});

//esto simplemente es para hacerlo un poco bonito e intuitivo
var failed = false;

//esto es para que el chat se vea "bonito"
var displayName;

function postPetition() {
    displayName = $("#nickName").val();
    if (displayName != ""){
        fetch("http://localhost:8080/players", {
            method: "POST",
            headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
        nickName: $("#nickName").val(),
        }),
        })
        .then((response) => response.json())
        .then((data) => console.log(data));

        document.getElementById("login").style.display = "none";
        document.getElementById("centro").style.display = "block";
        document.getElementById("controles").style.visibility = "visible";
        document.getElementById("chatBox").style.display = "block";
    } else if(!failed){
        $("#login").append("<br><p id='mess'>Debes introducir un nombre para poder jugar</p>");
        failed = true;
    }
}
function postMessage(){
    var writtenMessage = $("#message").val();
    if(writtenMessage != null){
        fetch("http://localhost:8080/chat", {
            method: "POST",
            headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
        name: displayName,
        message: $("#message").val(),
        }),
        })
        .then((response) => response.json())
        .then((data) => console.log(data));
        $("#chatHistory").append("<p><b>"+ displayName + ": </b>" + writtenMessage + "</p>");
    }
}
function getMessage(){
    fetch("http://localhost:8080/chat")
      .then((response) => response.json())
      .then((data) => console.log(data));
}

function checkServer() {
    updatePlayer();
    getPlayer();
    serverNotRespond > 3
      ? (document.getElementById("onlinePlayers").innerHTML = "Offline")
      : (document.getElementById("onlinePlayers").innerHTML = "Jugadores En Linea: " + activePlayers);
  }
  
  //Check player connection
  function checkPlayer() {
    getPlayer();
  }
  
  //! JQuery
  //Get players from server
  function getPlayer() {
    var playersOnline;
    $.ajax({
      url: "http://localhost:8080/players",
    })
      .done(function (players) {
        serverNotRespond = 0;
        playersOnline = players;
        activePlayers = players;
        console.log(players,activePlayers);
      })
      .fail((jqXHR, Status, errorThrown) => {
        serverNotRespond ++;
        console.log(errorThrown);
      });
  }
  
  //Create player in server
  function addPlayer() {
    let request = {
      nickName: document.getElementById("loginNickName").value,
      password: document.getElementById("loginPassword").value,
    };
    console.log(JSON.stringify(request));
    $.ajax({
      method: "POST",
      url: "http://localhost:8080/players",
      data: JSON.stringify(request),
      headers: {
        "Content-type": "application/json; charset=UTF-8", // Indica el contenido
      },
    })
      .done((data) => {
        actualPlayerID = data.id;
      })
      .fail((jqXHR, Status, errorThrown) => {
        console.log(errorThrown);
      });
  }
  
  //Update player in server
  function updatePlayer() {
    let request = {
      nickName: document.getElementById("loginNickName").value,
      password: document.getElementById("loginPassword").value,
    };
    $.ajax({
      method: "PUT",
      url: "http://localhost:8080/players/" + actualPlayerID,
      data: JSON.stringify(request),
      processData: false,
      headers: {
        "Content-Type": "application/json",
      },
    })
      .done(function (player) {
        serverNotRespond = 0;
        console.log("resoponde");
      })
      .fail((jqXHR, Status, errorThrown) => {
        serverNotRespond++;
        console.log(errorThrown,serverNotRespond, "no responde" );
      });
  }
  
  //Delete player from server
  function deletePlayer(playerID) {
    $.ajax({
      method: "DELETE",
      url: "http://localhost:8080/players/" + playerID,
    }).done(function (playerID) {
      console.log("Deleted player " + playerID);
    });
  }

