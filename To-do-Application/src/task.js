// Define a Task class
class Task {
  constructor(id, description, completed = false) {
    this.id = id;
    this.description = description;
    this.completed = completed;
  }

  toggleCompleted() {
    this.completed = !this.completed;
  }
}

export default Task;
