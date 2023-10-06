// task function

const taskManager = [];
function addTask(taskName = "Untitled Task", dueDate = "No Due Date") {
  const task = { name: taskName, due: dueDate, complete: false };
  console.log(task);
  taskManager.push(task);
}
// addTask();

function completeTask(taskIndex) {
  if (taskIndex < 0 || taskIndex >= taskManager.length) {
    return null;
  }
  taskManager[taskIndex].completed = true;
  console.log(taskManager[taskIndex]);
  return taskManager[taskIndex];
}

// const taskIndexToComplete = 2;
// const completedTask = completeTask(taskIndexToComplete);
// if (completedTask === null) {
//   console.log("Invalid task index.");
// } else {
//   console.log(`Task "${completedTask.name}" marked as completed.`);
// }

const factorial = (n) => {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    let result = 1;
    for (let i = 2; i <= n; i++) {
      result *= i;
    }
    return result;
  }
};

const result = factorial(3);
console.log(`The Factorial of 3 is ${result} cookie!`);
