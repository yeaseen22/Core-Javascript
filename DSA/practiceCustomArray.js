const DEFAULT_CAPACITY = 10;
class CustomArray {
    constructor(capacity = DEFAULT_CAPACITY) {
        this.capacity = capacity;
        this.length = 0;
        this.array = new Array(capacity)
    }

    push(value) {
        const last = this.length;
        this.array[last++] = value;
    }

    pop() {
        if (this.length === undefined) return undefined;

        const value = this.array[this.length - 1];
        this.array[this.array - 1] = undefined;
        this.length--

        return value
    }

}