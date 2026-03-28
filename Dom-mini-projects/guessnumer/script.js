
var randomnumber = Math.floor(Math.random() * 10) + 1; // ✅ ADD THIS LINE
var guessnumber = document.getElementById("guessnumber");
var result = document.getElementById("result");
var score = document.getElementById("score");
var totalscore = 10;

function check() {
    var enterednumber = guessnumber.value;
    if (randomnumber == enterednumber) {
        console.log("Right");
        result.textContent =  "Right"
        alert("YOU Won");
    } else {
        totalscore = totalscore - 1;
        score.textContent = "score:" + totalscore;
        result.textContent = "Wrong";
    }
}