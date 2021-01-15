var Ply_1 = localStorage.getItem("Player_1");
var Ply_2 = localStorage.getItem("Player_2");

Ply_1Score = 0;
Ply_2Score = 0;

document.getElementById("P1_Name").innerHTML= Ply_1 + " : ";
console.log(Ply_1);
document.getElementById("P2_Name").innerHTML= Ply_2 + " : ";

document.getElementById("P1_S").innerHTML = Ply_1Score;
document.getElementById("P2_S").innerHTML = Ply_2Score;

document.getElementById("Ques_P").innerHTML = "Question Turn - " + Ply_2;
document.getElementById("Ans_P").innerHTML = "Answer Turn - " + Ply_1;