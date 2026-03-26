

var randomnumber = Math.floor(Math.random() * 10) + 1;
var guessnumber=document.getElementById("guessnumber")
var result=document.getElementById("result")
var score=document.getElementById("score")
var totalscore = 10;

function check() {
    var enterednumber = guessnumber.value
    if(randomnumber == enterednumber) {
    console.log("Rigth");
    result.textContent = "Rigth"
    alert("YOU WON")
   
} else {
    totalscore = totalscore -1
    score.textcontent="score:"+totalscore
    result.textContent="Wrong"
 }

}