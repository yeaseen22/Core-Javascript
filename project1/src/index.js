const { argv } = require("yargs");
const path = require("path");
const Todo = require("./Todo");
const { saveFile, readFile } = require("./utils");
const { ADD, UPDATE, NEXT, FIND, DONE, LIST } = require("./commands");
const { log } = require("console");

const fileName = "../data.json";
const filePath = path.resolve(__dirname, fileName);

(function init() {
  const data = readFile(filePath) || [];
  const todo = new Todo(data);
  const { _: baseCommand } = argv;

  switch (baseCommand[0]) {
    case ADD: {
      todo.additem(argv.text);
      console.log("Todo Added");
      saveFile(todo.todolist, filePath);
      break;
    }
    case UPDATE: {
      todo.update(argv.id, argv.text);
      console.log("Todo Updated");
      saveFile(todo.todolist, filePath);
      break;
    }
    case NEXT: {
      const item = todo.next();
      console.log(`${item.id} - ${item.text} [${item.created}]`);
      break;
    }
    case DONE: {
      todo.done();
      console.log("One Item Completed");
      saveFile(todo.todolist, filePath);
      break;
    }
    case FIND: {
      const itmes = todo.find(argv.term);
      if (itmes.length === 0) {
        console.log("No Item Found");
        break;
      }
      for (let i = 0; i < itmes.length; i++) {
        console.log(`${items[i].id} - ${items[i].text} [${items[i].created}]`);
      }
      break;
    }
    case LIST: {
      if (todo.todolist.length === 0) {
        console.log("Empty List");
        break;
      }
      for (let i = 0; i < todo.todolist.length; i++) {
        console.log(
          `${todo.todolist[i].id} - ${todo.todolist[i].text} [${todo.todolist[i].created}]`
        );
      }
      break;
    }
    default:
      throw new Error('Command Not Found');
  }
})();
