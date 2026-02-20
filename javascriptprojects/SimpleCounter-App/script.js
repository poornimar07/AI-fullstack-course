
// select elements
const countEl = document.getElementById("count");
const increaseBtn = document.getElementById("increase");
const decreaseBtn = document.getElementById("decrease");
const resetBtn = document.getElementById("reset");

let count = 0;

// increase
increaseBtn.addEventListener("click", function() {
    count++;
    countEl.textContent = count;
});

// decrease
decreaseBtn.addEventListener("click", function() {
    count--;
    countEl.textContent = count;
});

// reset
resetBtn.addEventListener("click", function() {
    count = 0;
    countEl.textContent = count;
});