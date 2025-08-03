// Wait for the DOM to be fully loaded before running the script
document.addEventListener('DOMContentLoaded', function() {
    // Select DOM elements
    const addButton = document.getElementById('add-task-btn'); // Add Task button
    const taskInput = document.getElementById('task-input');   // Task input field
    const taskList = document.getElementById('task-list');     // Unordered list to display tasks

    // Function to load tasks from Local Storage and populate the task list
    function loadTasks() {
        // Get the stored tasks from Local Storage (if any), or default to an empty array
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        
        // Check if there are tasks in Local Storage and populate the task list
        if (storedTasks.length > 0) {
            // Iterate through each task in the array and add it to the DOM
            storedTasks.forEach(taskText => {
                addTask(taskText, false); // 'false' ensures tasks are not added to Local Storage again
            });
        }
    }

    // Function to add a task to the task list and Local Storage
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

        // Save to Local Storage if 'save' is true
        if (save) {
            saveTaskToLocalStorage(taskText);
        }

        // Clear the input field after adding the task
        taskInput.value = '';
    }

    // Function to save task to Local Storage
    function saveTaskToLocalStorage(taskText) {
        // Retrieve the existing tasks from Local Storage, or initialize an empty array
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        
        // Add the new task to the tasks array
        storedTasks.push(taskText);

        // Save the updated tasks array back to Local Storage
        localStorage.setItem('tasks', JSON.stringify(storedTasks));
    }

    // Function to remove task from Local Storage
    function removeTaskFromLocalStorage(taskText) {
        // Retrieve the existing tasks from Local Storage
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        
        // Remove the task from the array
        const updatedTasks = storedTasks.filter(task => task !== taskText);
        
        // Save the updated array back to Local Storage
        localStorage.setItem('tasks', JSON.stringify(updatedTasks));
    }

    // Attach event listeners to the buttons and input field
    addButton.addEventListener('click', function() {
        const taskText = taskInput.value.trim();
        addTask(taskText); // Add the task entered in the input field
    });

    taskInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            const taskText = taskInput.value.trim();
            addTask(taskText); // Add the task if "Enter" is pressed
        }
    });

    // Load existing tasks from Local Storage when the page loads
    loadTasks(); // Call this function to populate the task list
});
