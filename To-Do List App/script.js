// Select elements from the HTML
const taskInput = document.getElementById("task");
const addTaskButton = document.getElementById("add-task");
const taskList = document.getElementById("task-list");

// Add task function
function addTask() {
    const taskText = taskInput.value;
    if (taskText !== "") {
        const taskItem = document.createElement("li");
        taskItem.innerHTML = `${taskText} <button class="delete">Delete</button>`;
        taskList.appendChild(taskItem);
        taskInput.value = "";
        addDeleteListener(taskItem);
    }
}

// Delete task function
function deleteTask() {
    this.parentNode.remove();
}

// Add a delete listener to a task item
function addDeleteListener(taskItem) {
    const deleteButton = taskItem.querySelector(".delete");
    deleteButton.addEventListener("click", deleteTask);
}

// Add a new task when the "Add" button is clicked
addTaskButton.addEventListener("click", addTask);

// Add a new task when Enter is pressed in the input field
taskInput.addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        addTask();
    }
});
