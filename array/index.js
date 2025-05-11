
const DEFAULT_CAP = 10;
class CustomArray {
    constructor(capacity = DEFAULT_CAP) {
        this.capacity = capacity;
        this.array = new Array(capacity);
        this.length = 0;
    }

    get(index) {
        return this.array[index]
    }

    #lenghtCheck(index) {
        if (index < 0 || index > this.length) {
            throw new Error('Index out of bounds')
        }
    }

    push(element) {
        this.array[this.length] = element;
        this.length++;
    }

    insert(index, element) {
        this.#lenghtCheck(index)

        for (let i = this.length; i > index; i--) {
            this.array[i] = this.array[i - 1]
        }
        this.array[index] = element;
        this.length = this.length + 1
    }

    remove(index) {
        this.#lenghtCheck(index)

        const element = this.array[index]
        for (let i = index; i < this.length - 1; i++) {
            this.array[i] = this.array[i + 1];
        }
        this.length--;
    }

    update(index, element) {
        return this.array[index] = element;
    }

    pop() {
        const element = this.array[this.length - 1];
        this.length--;
        return element;
    }

    get2(index) {
        return this.array[index]
    }

    #lenghtCheck2(index) {
        if (index < 0 || index > this.length) {
            throw new Error('Error boundary')
        }
    }

    #shrink() { }

    grow() { }

    push2(element) {
        this.array[this.length] = element;
        this.length++;
    }

    insert2(index, element) {
        this.#lenghtCheck2(index)

        for (let i = this.length; i > index; i--) {
            this.array[i] = this.array[i - 1]
        }
        this.array[index] = element;
        this.length++;
    }

    remove2(index) {

        this.#lenghtCheck2(index)

        for (let i = index; i < this.length - 1; i++) {
            this.array[i] = this.array[i + 1]
        }
        this.length--
    }

    update2(index, element) {
        this.array[index] = element;
    }

    pop2() {
        this.array[this.length - 1] = undefined;
        this.length--;
    }
}

const newCustom = new CustomArray();
newCustom.push(1);
newCustom.push(2)
newCustom.push(4)
// newCustom.insert(1, 30)
// newCustom.remove(0)
newCustom.pop2()
console.log(newCustom);



class NewArray {
    constructor(capacity = DEFAULT_CAP) {
        this.capacity = capacity;
        this.array = new Array(capacity);
        this.length = 0;
    }

    #resize(newCapacity) {
        if (newCapacity === this.capacity) return;

        const newArray = new Array(newCapacity);
        for (let i = 0; i < this.length; i++) {
            newArray[i] = this.array[i]
        }
        this.array = newArray;
        this.capacity = newCapacity;
    }
    #grow() {
        this.capacity *= 2;
        this.#resize(this.capacity)
    }

    #shrink() {
        if (this.capacity / 2 < this.length) return;
        this.capacity = Math.max(DEFAULT_CAP, Math.floor(this.capacity / 2));
        this.#resize(this.capacity)
    }

    push(element) {
        if (this.length === this.capacity) {
            this.#grow()
        }
        this.array[this.length] = element;
        this.length++;
    }

    pop() {
        if (this.length === 0) {
            throw new Error('Array is empty')
        }
        const element = this.array[this.length - 1];
        this.length--;

        if (this.length < this.capacity / 4) {
            this.#shrink()
        }

        return element
    }

    insert(index, element) {
        if (index < 0 || index > this.length) {
            throw new Error('Index out of bounds');
        }
        if (this.length === this.capacity) {
            this.#grow()
        }
        for (let i = this.length; i > index; i--) {
            this.array[i] = this.array[i - 1]
        }
        this.array[index] = element
        this.length++;

    }

    remove(index) {
        if (index < 0 || index > this.length) {
            throw new Error('Index out of bounds');
        }
        const element = this.array[index];
        for (let i = index; i < this.length - 1; i++) {
            this.array[i] = this.array[i + 1]
        }
        this.length--;
        if (this.capacity < this.length / 4) {
            this.#shrink()
        }

        return element
    }

    toArray() {
        return this.array.slice(0, this.length)
    }

    toString() {
        return this.array.slice(0, this.length).join(', ')
    }

}


const customArray = new newArray();
customArray.push(5);
customArray.push(2);
customArray.push(3);

console.log(customArray.toArray()); // [1, 2, 3]




