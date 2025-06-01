// circular linkedlist
class Node {
    constructor(data) {
        this.head = data;
        this.next = null;
    }
}

class CircularLinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    // inserting value
    insert(data) {
        const newNode = new Node(data)
        this.size++;

        if (!this.head) {
            this.head = newNode;
            newNode.next = this.head
            return
        }

        let current = this.head;
        while (current.next !== this.head) {
            current = current.next;
        }

        current.next = newNode;
        newNode.next = this.head;
    }

    get(position) {
        console.log(position);

        if (position < 0 || position > this.size) return

        let current = this.head;
        let index = 0;

        while (index < position) {
            current = current.next
            index++
        }

        return current
    }

    
}

const myCircularLinkedList = new CircularLinkedList()
myCircularLinkedList.insert(2)
myCircularLinkedList.insert(3)
console.log(myCircularLinkedList.get(1));

// console.log(myCircularLinkedList);

