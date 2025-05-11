
// doubly linked list
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null
        this.tail = null;
        this.size = 0;
    }

    // add to the end
    append(data) {
        const newNode = new Node(data)
        this.size++;

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
            return;
        }

        newNode.prev = this.tail;
        this.tail.next = newNode;
        this.tail = newNode;

        return newNode
    }

    // add to the start
    prepend(data) {
        const newNode = new Node(data)
        this.size++;

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode
            return;
        }

        newNode.next = this.head;
        this.head.prev = newNode;
        this.head = newNode
    }

    remove(data) {
        if (!this.head) return;
        let current = this.head;

        while (current) {
            if (current.data !== data) {
                current = current.next;
                continue;
            }


            if (current === this.head && current === this.tail) {
                this.head = null;
                this.tail = null;
                this.size--;
                return true;
            }

            if (current === this.head) {
                this.head = current.next;
                this.head.prev = null;
                this.size--;
                return true;
            }

            if (current === this.tail) {
                this.tail = current.prev;
                this.tail.next = null;
                this.size--;
                return true;
            }

            current.prev.next = current.next;
            current.next.prev = current.prev;
            this.size--;
            return true;
        }
    }

    insertAt(data, position) {
        if (position < 0 || position > this.size) return false;

        if (position === 0) {
            this.prepend(data);
            return true;
        }

        if (position === this.size) {
            this.append(data);
            return true;
        }

        const newNode = new Node(data);
        let current = this.head;
        let previous = this.tail;
        let index = 0;

        while (index < position) {
            previous = current;
            current = current.next;
            index++;
        }

        newNode.prev = previous;
        newNode.next = current;
        previous.next = newNode;
        current.prev = newNode;

        this.size++;
        return true;
    }

    // update(position, data) {
    //     if (position < 0 || position >= this.size) return false;

    //     if (position === 0) {
    //         const newNode = new Node(data)
    //         let current = this.head;
    //         this.head = newNode;
    //         this.head.next = current.next;
    //         return true;
    //     }

    //     if (position === this.size-1) {
    //         const newNode = new Node(data);
    //         let current = this.head;
    //         let previous = null;
    //         let index = 0;

    //         while (position) {
    //             previous = current;
    //             current = current.next;
    //             index++
    //         }

    //         previous = newNode;
    //         this.tail.data = newNode.data;
    //         return true
    //     }

    //     const newNode = new Node(data);
    //     let current = this.head;
    //     let previous = null;
    //     let index = 0;

    //     while (index < position) {
    //         current = current.next;
    //         index++;
    //     }

    //     newNode.next = current.next;
    //     newNode.prev = current.prev;
    //     current.prev.next = newNode;
    //     current.next.prev = newNode;
    //     return true;
    // }

    update(position, data) {
    if (position < 0 || position >= this.size) return false;

    const newNode = new Node(data);

    // Update head
    if (position === 0) {
        let current = this.head;
        newNode.next = current.next;
        if (current.next) current.next.prev = newNode;
        this.head = newNode;
        if (this.size === 1) this.tail = newNode;
        return true;
    }

    // Update tail
    if (position === this.size - 1) {
        let current = this.tail;
        newNode.prev = current.prev;
        if (current.prev) current.prev.next = newNode;
        this.tail = newNode;
        return true;
    }

    // Update in between
    let current = this.head;
    let index = 0;
    while (index < position && current) {
        current = current.next;
        index++;
    }

    if (!current) return false; // Protection

    newNode.prev = current.prev;
    newNode.next = current.next;

    if (current.prev) current.prev.next = newNode;
    if (current.next) current.next.prev = newNode;

    return true;
}


}

const myDoublyLinkedList = new DoublyLinkedList();
myDoublyLinkedList.append(5);
// myDoublyLinkedList.append(10);
// myDoublyLinkedList.append(15);
// myDoublyLinkedList.remove(10);
// myDoublyLinkedList.insertAt(40, 1)
myDoublyLinkedList.update(0, 20)
console.log(myDoublyLinkedList);


