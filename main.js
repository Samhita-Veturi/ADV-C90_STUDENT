var Player_1 = document.getElementById("Ply_1").nodeValue ;

var Player_2 = document.getElementById("Ply_2").nodeValue ;

function Login(){
    localStorage.setItem("Player-1", Player_1);
    localStorage.setItem("Player-2", Player_2);
    window.location = "Game.html";
}