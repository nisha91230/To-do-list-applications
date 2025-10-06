// Get references to the necessary elements
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

function addTask() {
    // 1. Get the value and trim whitespace
    const taskText = taskInput.value.trim();

    // 2. Check if the input is not empty
    if (taskText === "") {
        alert("Please enter a task!");
        return; // Stop if there's no text
    }

    // 3. Create the new list item (<li>)
    const listItem = document.createElement('li');
    listItem.innerHTML = `
        <span>${taskText}</span>
        <button class="delete-btn" onclick="deleteTask(this)">Delete</button>
    `;

    // 4. Add the task to the list
    taskList.appendChild(listItem);

    // 5. Clear the input field
    taskInput.value = "";

    // 6. Add event listener to toggle 'completed' class on click
    listItem.addEventListener('click', function() {
        // Toggle the 'completed' class on the list item itself
        listItem.classList.toggle('completed');
    });
}

function deleteTask(buttonElement) {
    // 'buttonElement' is the Delete button that was clicked (passed by 'this')
    // The parent element of the button is the <li>, which is the whole task
    const listItem = buttonElement.parentNode;
    
    // Remove the <li> from its parent (the <ul>)
    taskList.removeChild(listItem);
}