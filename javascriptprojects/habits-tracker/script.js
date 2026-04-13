
// ================================
// BASIC CONCEPTS USED HERE:
// 1. variables
// 2. arrays
// 3. functions
// 4. if else
// 5. getElementById
// 6. localStorage
// ================================


// STEP 1 - create empty list to store habits
// array = list of items
// example: ["Drink Water", "Exercise", "Read Book"]
var habitList = [];


// STEP 2 - when page opens load saved habits
window.onload = function() {

  // check if habits saved before
  var saved = localStorage.getItem('myhabits');

  // if saved - load it
  if (saved !== null) {
    habitList = JSON.parse(saved);
  }

  // show habits on screen
  showHabits();

};


// STEP 3 - add new habit
function addHabit() {

  // get what user typed
  var name = document.getElementById('habitInput').value;

  // if empty - stop
  if (name === '') {
    alert('Type a habit first!');
    return;
  }

  // add to list
  // push = add item to array
  habitList.push(name);
  // before: ["Drink Water"]
  // after:  ["Drink Water", "Exercise"]

  // save to localStorage
  localStorage.setItem('myhabits', JSON.stringify(habitList));

  // clear input
  document.getElementById('habitInput').value = '';

  // show on screen
  showHabits();

}


// STEP 4 - delete a habit
function deleteHabit(index) {

  // splice = remove item from array
  // index = position of item (0, 1, 2...)
  habitList.splice(index, 1);
  // example: remove item at position 1

  // save
  localStorage.setItem('myhabits', JSON.stringify(habitList));

  // show on screen
  showHabits();

}


// STEP 5 - show all habits on screen
function showHabits() {

  // get the list div from HTML
  var list = document.getElementById('habitList');

  // clear old content
  list.innerHTML = '';

  // if no habits
  if (habitList.length === 0) {
    list.innerHTML = '<p class="empty">No habits yet! Add one 👆</p>';
    return;
  }

  // loop through each habit
  // i = 0, 1, 2, 3...
  for (var i = 0; i < habitList.length; i++) {

    // get habit name
    var name = habitList[i];

    // create a new div
    var div = document.createElement('div');
    div.className = 'habit-card';

    // put content inside
    div.innerHTML =
      '<span class="habit-name">' + name + '</span>' +
      '<button onclick="deleteHabit(' + i + ')" class="del-btn">🗑️ Delete</button>';

    // add to page
    list.appendChild(div);

  }

}