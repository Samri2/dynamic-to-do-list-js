// Wait for the DOM to be fully loaded before running the script
document.addEventListener('DOMContentLoaded', function() {
    // Select DOM elements
    const addButton = document.getElementById('add-task-btn'); // Add Task button
    const taskInput = document.getElementById('task-input');   // Task input field
    const taskList = document.getElementById('task-list');     // Unordered list to display tasks

    // Function to add a task to the list
    function addTask() {
        // Get the value of the input field and trim any extra spaces
        const taskText = taskInput.value.trim();

        // Check if the input field is empty
        if (taskText === "") {
            // If it's empty, alert the user to enter a task
            alert("Please enter a task.");
            return; // Stop further execution
        }

        // Create a new <li> element for the task
        const taskItem = document.createElement('li');

        // Set the text content of the <li> to the task
        taskItem.textContent = taskText;

        // Create a new button element for removing the task
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove'; // Button label
        removeButton.className = 'remove-btn'; // Add a class for styling

        // Add an event listener to the remove button to delete the task
        removeButton.addEventListener('click', function() {
            taskList.removeChild(taskItem); // Remove the task from the list
        });

        // Append the remove button to the task <li>
        taskItem.appendChild(removeButton);

        // Append the task <li> to the task list
        taskList.appendChild(taskItem);

        // Clear the input field after the task is added
        taskInput.value = '';
    }

    // Add event listener to the "Add Task" button
    addButton.addEventListener('click', addTask);

    // Add event listener to the input field to allow adding tasks by pressing "Enter"
    taskInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            addTask(); // Call addTask if the Enter key is pressed
        }
    });
});
