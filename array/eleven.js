const Queue = require('./ten')
const queue = new Queue();
queue.enqueue('task1');
queue.enqueue('task2');
queue.showQueue()

console.log(queue);
queue.next()