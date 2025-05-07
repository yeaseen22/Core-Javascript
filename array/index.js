
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

    #shrink(){}

    grow(){}

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


