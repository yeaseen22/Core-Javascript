
// singly linkedlist
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    // add node
    prepend(data) {
        const newNode = new Node(data);
        this.size++;

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
            return;
        }

        // try to add in first place
        newNode.next = this.head;
        this.head = newNode;
    }

    append(data) {
        const newNode = new Node(data);
        this.size++;

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;

            return
        }

        this.tail.next = newNode;
        this.tail = newNode;
    }

    // adding to any position
    insertAt(data, position) {
        if (position < 0 || position > this.size) return false;

        if (position === 0) {
            this.prepend(data)
            return true;
        }

        if (position === this.size) {
            this.append(data);
            return true;
        }

        const newNode = new Node(data);
        let current = this.head;
        let previous = null;
        let index = 0;

        while (index < position) {
            previous = current;
            current = current.next;
            index++
        }

        newNode.next = current
        previous.next = newNode;
        this.size++
        return true
    }



    get(position) {
        if (position < 0 || position < this.size) return

        let currnet = this.head;
        let index = 0;

        while (index < position) {
            currnet = currnet.next;
            index++;
        }

        return currnet.next;
    }

    removeAt(position) {
        if (position < 0 || position < this.size) return

        let removedNode;

        if (position === 0) {
            removedNode = this.head;
            this.head = this.head.next;

            if (this.size === 1) {
                this.tail = null;
            }
        } else {
            let current = this.head;
            let previous = null;
            let index = 0;

            while (index < position) {
                previous = current;
                current = current.next;
                index++
            }

            removedNode = current;
            previous.next = current.next;
            if (!current.next) {
                this.tail = previous;
            }

            this.size--;
            return removedNode;
        }
    }

    exists(data) {
        let current = this.head;

        while (current) {
            if (current.data === data) {
                return true;
            }

            current = current.next;
        }

        return false;
    }

    update(position, data) {
        if (position < 0 || position > this.size) return false;

        if (position === 0) {
            const newNode = new Node(data);
            let current = this.head
            this.head = newNode;
            this.head.next = current.next;
            return true
        }

        if (position === this.size) {
            const newNode = new Node(data);
            let current = this.head;
            let previous = null;
            let index = 0;

            while (current) {
                previous = current;
                current = current.next;
                index++
            }
            
            previous = newNode;
            this.tail.data = newNode.data;
            return true;
        }

        const newNode = new Node(data);
        let current = this.head
        let previous = null;
        let index = 0;

        while (index < position) {
            previous = current;
            current = current.next
            index++;
        }
        previous.next = newNode;
        newNode.next = current.next;

        return newNode;
    }

}


// const data = new LinkedList()
// data.prepend(3)
// data.prepend(6)
// console.log(data);

const myLinkedList = new LinkedList();
myLinkedList.prepend(12);
myLinkedList.append(5);
myLinkedList.append(8);
myLinkedList.insertAt(90, 1);
console.log(myLinkedList.update(4, 30));

console.log(JSON.stringify(myLinkedList));
