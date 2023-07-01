import Task from "./task.js";

class TaskManager {
  constructor() {
    this.tasks = [];
    this.currentId = 1;
  }

  addTask(description) {
    const task = new Task(this.currentId, description);
    this.tasks.push(task);
    this.currentId++;
  }

  deleteTask(id) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
  }

  toggleTask(id) {
    const task = this.tasks.find((task) => task.id === id);
    if (task) {
      task.toggleCompleted();
    }
  }

  getTasks() {
    return this.tasks;
  }
}

export default TaskManager;
