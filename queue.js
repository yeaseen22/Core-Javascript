/**@title: implement a basic queue  */

const MAX_SIZE = 30;
class Queue {
  construcor() {
    this.front = 0;
    this.rear = 0;
    this.queue = new Array(MAX_SIZE);
  }

  enqueue(item) {
    if (this.rear === MAX_SIZE) {
      console.log("Queue is full");
      return false;
    }

    this.queue[this.queue] = item;

  }

  dequeue() {
    if (this.front === this.rear) {
      console.log("Queue is empty");
      return;
    }

    const item = this.queue[this.front];
    for (let i = this.front; i < this.rear - 1; i++) {
      this.queue[i] = this.queue[i + 1];
    }

    delete this.queue[--this.rear];

    return item;
  }

  showQueue() {
    if (this.front === this.rear) {
      console.log("Queue is empty");
      return;
    }

    for (let i = this.front; i < this.rear; i++) {
      console.log("[Displaying]", this.queue[i]);
    }
  }

  next() {
    if (this.isEmpty()) {
      console.log("Queue is Empty");
      return;
    }
    return this.queue[this.front];
  }

  isEmpty() {
    return this.front === this.rear;
  }
}


module.exports = Queue;