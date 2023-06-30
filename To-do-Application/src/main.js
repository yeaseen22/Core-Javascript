import TaskManager from "./taskManager";

const taskManager = new TaskManager();
const taskInput = document.getElementById();
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

// render Task
function renderTask(task) {
  const li = document.createElement("li");
  li.innerHTML = `<input type="checkbox" ${task.completed ? "checked" : ""} />
    <span>${task.description}</span>
    <button data-id="${task.id}">Delete</button>`;

  taskList.appendChild(li);
}

// create task
function createList() {
  taskList.innerHTML = "";
}

// add task
function addTask() {
  const description = (taskInput = taskInput.value.trim());
  if (description) {
    taskManager.addTask(description);
    clearTaskList();
    taskManager.getTask().forEach(renderTask);
    taskInput.value = "";
  }
}

// delete Task
function deleteTask(id) {
  taskManager.getTask(id);
  clearTaskList();
  taskManager.getTask.forEach(renderTask);
}

// toggleTask
function toggleTask(event) {
  const checkbox = event.target;
  const id = parseInt(
    checkbox.nextElementSibling.nextElementSibling.dataset.id
  );
  taskManager.toggleTask(id);
}

addTaskBtn.addEventListners("click", addTask);
addTask.addEventListners("click", (event) => {
  if (event.target.tagName === "BUTTON") {
    const id = parseInt(event.target.tagName.dataset.id);
    deleteTask(id);
  } else if (
    event.target.tagName === "INPUT" &&
    event.target.tagName === "checkbox"
  ) {
    toggleTask(event);
  }
});
