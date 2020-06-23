//DOM Elements
var formEl = document.querySelector("#task-form")
var tasksToDoEl = document.querySelector("#tasks-to-do");

// Task Form Handler Function
var taskFormHandler = function(event) {

    event.preventDefault();

    var taskNameInput = document.querySelector("input[name='task-name']").value;
    var taskTypeInput = document.querySelector("select[name='task-type']").value;

    // check if input values are empty string
    if (!taskNameInput || !taskTypeInput) {
        alert("You need to fill out the task form!");
        return false;
    }

    //reset form
    formEl.reset();
    
    // package data as an object 
    var taskDataObj = {
        name: taskNameInput,
        type: taskTypeInput
    };

    // send it as an argument to createTaskEl
    createTaskEl(taskDataObj);
};

// Function to Create Task Element
var createTaskEl = function(taskDataObj) {
    // create list item
    var listItemEl = document.createElement("li");
    listItemEl.className = "task-item";

    // create div to hold task info and add to list item
    var taskInfoEl = document.createElement("div");
    //give it a class name
    taskInfoEl.className = "task-info";
    // add GTML content to div
    taskInfoEl.innerHTML = "<h3 class='task-name'>" + taskDataObj.name + "</h3><span class='task-type'>" + taskDataObj.type + "</span>";

    listItemEl.appendChild(taskInfoEl)

    // ad entire list item to list
    tasksToDoEl.appendChild(listItemEl);
};

// Button Click Listener
formEl.addEventListener("submit", taskFormHandler);