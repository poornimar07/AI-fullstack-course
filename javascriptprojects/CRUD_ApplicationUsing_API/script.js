const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

let editIndex = null;

// CREATE + UPDATE
addBtn.addEventListener("click", function () {
    const taskValue = taskInput.value.trim();

    if (taskValue === "") return;

    if (editIndex === null) {
        createTask(taskValue);
    } else {
        updateTask(taskValue);
    }

    taskInput.value = "";
});

// CREATE
function createTask(task) {
    const li = document.createElement("li");
    li.innerHTML = `
        ${task}
        <button onclick="editTask(this)">Edit</button>
        <button onclick="deleteTask(this)">Delete</button>
    `;
    taskList.appendChild(li);
}

// DELETE
function deleteTask(button) {
    const li = button.parentElement;
    taskList.removeChild(li);
}

// UPDATE - Step 1 (Load data)
function editTask(button) {
    const li = button.parentElement;
    taskInput.value = li.firstChild.textContent.trim();
    editIndex = li;
    addBtn.textContent = "Update";
}

// UPDATE - Step 2 (Save data)
function updateTask(newValue) {
    editIndex.firstChild.textContent = newValue + " ";
    editIndex = null;
    addBtn.textContent = "Add";
}