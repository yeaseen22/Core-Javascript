function functionName<T>(value: T): T {
    return value;
}

functionName<number>(123);
functionName<string>('123')
functionName<boolean>(true)


function mergeObject<T, U>(obj1: T, Obj2: U): T & U {
    return { ...obj1, ...Obj2 }
}

const resul = mergeObject({name: 'john', age: 24}, {name: 'second'})


type Box<T> = {
    value: T;
}

const NumberBox: Box<number> = {value: 123}