// Wait for the DOM to be fully loaded before running the script
document.addEventListener('DOMContentLoaded', function() {
    // Select DOM elements
    const addButton = document.getElementById('add-task-btn'); // Add Task button
    const taskInput = document.getElementById('task-input');   // Task input field
    const taskList = document.getElementById('task-list');     // Unordered list to display tasks

    // Function to load tasks from Local Storage
    function loadTasks() {
        // Get the stored tasks from Local Storage (if any), or default to an empty array
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        
        // Iterate through each task in the array and add it to the DOM
        storedTasks.forEach(taskText => {
            addTask(taskText, false); // 'false' ensures tasks are not added to Local Storage again
        });
    }

    // Function to add a task
    function addTask(taskText, save = true) {
        // Check if taskText is empty
        if (taskText.trim() === "") {
            alert("Please enter a task.");
            return; // Stop if the input is empty
        }

        // Task Creation:
        const taskItem = document.createElement('li');
        taskItem.textContent = taskText;

        // Task Removal:
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.className = 'remove-btn';

        // Remove button functionality
        removeButton.onclick = function() {
            taskList.removeChild(taskItem); // Remove task from the DOM
            removeTaskFromLocalStorage(taskText); // Remove task from Local Storage
        };

        // Append remove button to the task item
        taskItem.appendChild(removeButton);

        // Append the task item to the task list
        taskList.appendChild(taskItem);

        //
