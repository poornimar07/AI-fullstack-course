
// this runs when the page loads
// it loads any saved notes from localStorage
window.onload = function() {

  // load saved note for each tab
  loadNote('tab1');
  loadNote('tab2');
  loadNote('tab3');

};


// this runs when you click a tab button
function openTab(tabName) {

  // step 1 - hide ALL tab contents
  document.getElementById('tab1').classList.add('hidden');
  document.getElementById('tab2').classList.add('hidden');
  document.getElementById('tab3').classList.add('hidden');

  // step 2 - remove active color from ALL tab buttons
  document.getElementById('btn-tab1').classList.remove('active');
  document.getElementById('btn-tab2').classList.remove('active');
  document.getElementById('btn-tab3').classList.remove('active');

  // step 3 - show only the tab you clicked
  document.getElementById(tabName).classList.remove('hidden');

  // step 4 - make the clicked button active (orange color)
  document.getElementById('btn-' + tabName).classList.add('active');

}


// this runs when you click the Save button
function saveNote(tabName) {

  // get what you typed in the textarea
  var text = document.getElementById('note-' + tabName).value;

  // save it to localStorage (stays saved even after refresh!)
  localStorage.setItem(tabName, text);

  // show saved message
  document.getElementById('msg-' + tabName).textContent = '✅ Note saved!';

  // hide the message after 2 seconds
  setTimeout(function() {
    document.getElementById('msg-' + tabName).textContent = '';
  }, 2000);

}


// this loads the saved note from localStorage
function loadNote(tabName) {

  // get the saved text from localStorage
  var savedText = localStorage.getItem(tabName);

  // if there is saved text, put it in the textarea
  if (savedText !== null) {
    document.getElementById('note-' + tabName).value = savedText;
  }

}

