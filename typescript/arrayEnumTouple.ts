const chaiFlavours: string[] = ['Masala', 'Adrak'];
const chaiPrice: number[] = [10, 20];

const ratting: Array<number> = [4, 5, 50];

type Chai = {
    name: string;
    price: number
}
const menu: Chai = [
    { name: 'Masala', price: 20 },
    { name: 'Adrak', price: 10 }
]

const cities: readonly string[] = ['Dhaka', 'Feni'];

const table: number[][] = [
    [1, 2, 3,],
    [4, 5, 6]
]

let chaiTuple: [string, number]
chaiTuple = ["Masala", 20] // order mandetory

let userInfo: [string, number, boolean?]
userInfo = ["hitest", 100]
userInfo = ["hitest", 100, true]

const location: readonly [number, number] = [28.66, 32.33];
const chaiItem: [name: string, price: number] = ["masala", 20]


enum CupSize {
    SMALL,
    MEDIUM,
    LARGE
}

const size = CupSize.LARGE

enum Status {
    PENDING = 100,
    SERVED, // 101
    CANCLED, // 102
}

enum ChaiType {
    MASALA = 'masala',
    GINGER = 'ginger'
}

function makeChai(type: ChaiType) {
    console.log('make chai', type);
}

makeChai(ChaiType.GINGER)


// not standard
enum RandomEnum {
    ID = 1,
    NAME = 'chai'
}

const enum Sugar {
    LOW = 1,
    MEDIUM = 2,
    HIGH = 3
}

// const s = Sugar.HIGH

let t: [string, number] = ['chai', 20];
t.push('extra') //unexpected array method because enum is technically array
