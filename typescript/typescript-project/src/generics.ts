

const score:  Array<number> = [];
const name: Array<string> = [];


function identityOne(val: boolean | number): boolean | number{
    return val
}

function identityTwo(val: any): any{
    return val
}

function identitythree<Type>(val: Type): Type{
    return val;
}


function identityFour<T>(val: T): T{
    return val;
}

interface Bootle{
    brand: string,
    type: number
}

identityFour<Bootle>({brand: "test", type: 1})

function identityFive<Bootle>(val: Bootle): Bootle{
    return val;
}

function getSearchProduct<T>(product: T[]): T {

    //do some database operations
    const myIndex = 4;
    return product[myIndex]
}

const getMoreSearchProduct = <T>(product: T[]): T => {
    //do some database operations
    const myIndex = 4;
    return product[myIndex]
}

interface Database{
    connection: string,
    username: string,
    password: string
}

function anotherFunction <T,U extends Database>(valOne: T, valTwo: U): object{
    return{
        valOne,
        valTwo
    }
}

anotherFunction(3, {connection: 'test', username: 'test', password: 'test'})

interface Quiz{
    name: string,
    type: string
}

interface Course{
    name: string,
    author: string,
    subject: string,
}

class Sellable<T>{
    public cart: T[] = []
}

export {}