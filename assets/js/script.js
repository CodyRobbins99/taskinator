//DOM Elements
var formEl = document.querySelector("#task-form")
var tasksToDoEl = document.querySelector("#tasks-to-do");

// Function To Create Task Item
var createTaskHandler = function(event) {

    event.preventDefault();
    
    var listItemEl = document.createElement("li");
    listItemEl.className = "task-item";
    listItemEl.textContent = "This is a new task.";
    tasksToDoEl.appendChild(listItemEl);
};

// Button Click Listener
formEl.addEventListener("submit", createTaskHandler);