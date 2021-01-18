
$(document).ready(function(){
    console.log("El DOM está cargado")
});

//esto simplemente es para hacerlo un poco bonito e intuitivo
var failed = false;

function postPetition() {
    var nickname = $("#nickName").val();
    if (nickname != ""){
        fetch("http://localhost:8080/players", {
            method: "POST",
            headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },

        //make sure to serialize your JSON body
        body: JSON.stringify({
        nickName: nickname,
        }),
        })
        .then((response) => response.json())
        .then((data) => console.log(data));

        document.getElementById("login").style.display = "none";
        document.getElementById("centro").style.display = "block";
        document.getElementById("controles").style.visibility = "visible";
    } else if(!failed){
        $("#login").append("<br><p id='mess'>Debes introducir un nombre para poder jugar</p>");
        failed = true;
    }
}
    
