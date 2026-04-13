interface Chai {
    flabour: string;
    price: number;
    milk: boolean
}
const maslaChai: Chai = {
    flavour: "masala",
    price: 10
}

interface Shop {
    readonly id: number;
    name: string
}

const s: Shop = {
    id:: 1, name: "chai aur code caffe"
}

interface DiscountCalculator {
    (price: number): number
}

const apply50: DiscountCalculator = (p) => P * 8

interface TeaMachine {
    start(price: number): void;
    stop(): void
}

const machine: TeaMachine = {
    start() {
        console.log('start');
    },

    stop() {
        console.log('end');
    }
}

//region index signature
interface chaiRatings {
    [flavour: string]: number
}

const rating = {
    masala: 4.5,
    ginger: 4.5
}

// interface can merge
interface User {
    name: string
}
interface User {
    age: number
}

const u: User = {
    name: 'hitest',
    age: 20
}

interface A {
    a: string
}
interface B {
    a: string
}

interface C extends A, B {

}

function wrapInArray<T>(item: T): T[] {
    return [item]
}
wrapInArray('masala')
wrapInArray(1)
wrapInArray({})

function pair<A, B>(a: A, b: B): [A, B][] {
    return [a, b]
}
pair('test', 'masala')

interface < T > Box{
    continue: T
}
const numberBox: Box<number>{
    content: 19
}

