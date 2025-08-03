// Function to add a task to the list
function addTask() {
    // Select the task input field and the task list container
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');
    
    // Get the task input value and trim any extra spaces
    const taskText = taskInput.value.trim();

    // Check if the task input is empty
    if (taskText === "") {
        alert("Please enter a task.");
        return;
    }

    // Create a new li element for the task
    const taskItem = document.createElement('li');
    taskItem.textContent = taskText;  // Set the task text as content

    // Create a remove button for the task
    const removeButton = document.createElement('button');
    removeButton.textContent = "Remove";
    removeButton.classList.add('remove-btn');

    // Add an event listener to the remove button to remove the task
    removeButton.addEventListener('click', function() {
        taskItem.remove();  // Remove the task from the list
    });

    // Append the remove button to the task item
    taskItem.appendChild(removeButton);

    // Append the task item to the task list
    taskList.appendChild(taskItem);

    // Clear the input field after adding the task
    taskInput.value = '';
}

// Event listener for the 'Add Task' button
document.getElementById('add-task-btn').addEventListener('click', addTask);

// Event listener to allow pressing "Enter" to add a task
document.getElementById('task-input').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        addTask();  // Call addTask function when Enter is pressed
    }
});

// Ensure the JavaScript runs when the DOM content is loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log("To-Do List App Loaded");
});
