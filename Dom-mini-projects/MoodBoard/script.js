
// Step 1 - all mood data in one place
var moods = {
  happy: { emoji: "😊", text: "You are feeling Happy!", bg: "#fff9c4" },
  sad:   { emoji: "😢", text: "You are feeling Sad.",   bg: "#bbdefb" },
  angry: { emoji: "😡", text: "You are feeling Angry!", bg: "#ffcdd2" },
  calm:  { emoji: "😌", text: "You are feeling Calm.",  bg: "#c8e6c9" }
};

// Step 2 - this function runs when a button is clicked
function setMood(mood) {

  // change the background color
  document.body.style.background = moods[mood].bg;

  // change the emoji
  document.getElementById("moodEmoji").textContent = moods[mood].emoji;

  // change the text
  document.getElementById("moodText").textContent = moods[mood].text;

}