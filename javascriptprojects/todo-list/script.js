
const addBtn = document.getElementById("addBtn");
const todoInput = document.getElementById("todoInput");
const todoList = document.getElementById("todoList");

addBtn.addEventListener("click", () => {
    const task = todoInput.value.trim();

    if (task === "") {
        alert("Please enter a task");
        return;
    }

    const li = document.createElement("li");
    li.innerHTML = `
        ${task}
        <button class="delete-btn">Delete</button>
    `;

    todoList.appendChild(li);
    todoInput.value = "";

    li.querySelector(".delete-btn").addEventListener("click", () => {
        li.remove();
    });
});