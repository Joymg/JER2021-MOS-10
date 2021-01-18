
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

        //make sure to serialize your JSON body
        body: JSON.stringify({
        nickName: $("#nickName").val(),
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
    
