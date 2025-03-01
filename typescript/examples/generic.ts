function functionName<T>(value: T): T {
    return value;
}

functionName<number>(123);
functionName<string>('123')
functionName<boolean>(true)


function mergeObject<T, U>(obj1: T, Obj2: U): T & U {
    return { ...obj1, ...Obj2 }
}

const resul = mergeObject({ name: 'john', age: 24 }, { name: 'second' })


type Box<T> = {
    value: T;
}

const NumberBox: Box<number> = { value: 123 }

type APIResponse<T> = {
    data: T;
    status: number;
    message: string;
}

type Users1 = {
    id: number;
    name: string;
    email: string;
}


// donnot need when we have fetchDataReuse
async function fetchData(): Promise<APIResponse<Users1>> {
    const response = await fetch('https://api.example.com/data');
    const data = await response.json();

    return {
        data,
        status: response.status,
        message: 'Success'
    }
}

async function main() {
    const user = await fetchData();
    console.log(user.data.email);

}
main();

// common function for fetching data
const fetchDataReuse = async <T>(url: string): Promise<APIResponse<T>> => {
    const response = await fetch(url)
    const data = await response.json();

    return {
        data,
        status: response.status,
        message: 'Success',
    }
}

async function main2() {
    const user = await fetchDataReuse<Users1>('https://api.example.com/data');
    console.log('own custom fetching function that used any data fetching work', user.data.name);

}



