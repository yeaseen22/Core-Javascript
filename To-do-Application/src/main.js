import TaskManager from "./taskManager.js";

const taskManager = new TaskManager();
const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

function renderTask(task) {
  const li = document.createElement("li");
  li.innerHTML = `
    <input type="checkbox" ${task.completed ? "checked" : ""} />
    <span>${task.description}</span>
    <button data-id="${task.id}">Delete</button>
  `;
  taskList.appendChild(li);
}

function clearTaskList() {
  taskList.innerHTML = "";
}

function addTask() {
  const description = taskInput.value.trim();
  if (description) {
    taskManager.addTask(description);
    clearTaskList();
    taskManager.getTasks().forEach(renderTask);
    taskInput.value = "";
  }
}

function deleteTask(id) {
  taskManager.deleteTask(id);
  clearTaskList();
  taskManager.getTasks().forEach(renderTask);
}

function toggleTask(event) {
  const checkbox = event.target;
  const id = parseInt(
    checkbox.nextElementSibling.nextElementSibling.dataset.id
  );
  taskManager.toggleTask(id);
}

addTaskBtn.addEventListener("click", addTask);
taskList.addEventListener("click", (event) => {
  if (event.target.tagName === "BUTTON") {
    const id = parseInt(event.target.dataset.id);
    deleteTask(id);
  } else if (
    event.target.tagName === "INPUT" &&
    event.target.type === "checkbox"
  ) {
    toggleTask(event);
  }
});
