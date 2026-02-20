
// Get all elements from HTML using their IDs
const taskInput = document.getElementById('taskInput');
const addBtn = document.getElementById('addBtn');
const taskList = document.getElementById('taskList');
const clearBtn = document.getElementById('clearBtn');

// Function to add a new task
function addTask() {
    // Get the text from input box and remove extra spaces
    const taskText = taskInput.value.trim();
    
    // Check if input is empty
    if (taskText === '') {
        alert('Please enter a task!');
        return; // Stop the function here
    }

    // Create new list item element (li)
    const li = document.createElement('li');
    li.className = 'task-item';

    // Create container for checkbox and text
    const taskContent = document.createElement('div');
    taskContent.className = 'task-content';

    // Create checkbox element
    const checkbox = document.createElement('div');
    checkbox.className = 'checkbox';

    // Create span element for task text
    const span = document.createElement('span');
    span.className = 'task-text';
    span.textContent = taskText; // Add user's text here

    // Create delete button
    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'delete-btn';
    deleteBtn.textContent = 'Delete';

    // Assemble all elements together (like building blocks)
    taskContent.appendChild(checkbox);  // Add checkbox to taskContent
    taskContent.appendChild(span);      // Add text to taskContent
    li.appendChild(taskContent);        // Add taskContent to li
    li.appendChild(deleteBtn);          // Add delete button to li

    // Add click event to mark task as complete/incomplete
    taskContent.addEventListener('click', function() {
        li.classList.toggle('completed');      // Toggle strikethrough
        checkbox.classList.toggle('checked');  // Toggle checkmark
    });

    // Add click event to delete button
    deleteBtn.addEventListener('click', function() {
        li.remove(); // Remove entire task from list
    });

    // Add the complete task to the task list
    taskList.appendChild(li);

    // Clear input box and focus back on it
    taskInput.value = '';
    taskInput.focus();
}

// Function to clear all completed tasks
function clearCompleted() {
    // Select all tasks that have 'completed' class
    const completedTasks = document.querySelectorAll('.task-item.completed');
    
    // Loop through each completed task and remove it
    completedTasks.forEach(task => task.remove());
}

// Event Listeners - Connect functions to button clicks

// When Add button is clicked, run addTask function
addBtn.addEventListener('click', addTask);

// When Enter key is pressed in input box, run addTask function
taskInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        addTask();
    }
});

// When Clear button is clicked, run clearCompleted function
clearBtn.addEventListener('click', clearCompleted);