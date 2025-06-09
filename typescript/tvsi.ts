// use type sujest by HM Nayem(consistently used in evey object function every where, but some third party library used interface for extending if no interface offer then donnot use it.)
type User_1 = {
    id: number;
    name: string;
}

// interface
// interface User_2 {
//     id: number;
//     name: string;
// }

// interface Admin extends User_2{
//     role: string;
// }

// interface Admin {
//     status: string;
// }

// const admin: Admin = {
//     id: 1,
//     name: 'john',
//     role: 'superadmin',
//     status: 'active',
// }


// type
// type Admin = User_1 & {
//     role: string;
// }

// const admin: Admin = {
//     id: 1,
//     name: 'Alice',
//     role: 'active'
// }


type AddFunction = (a: number, b: number) => number;
const adding: AddFunction = (a, b) => a + b;

interface IAddFunction {
    (a: number, b: number): number
}

type ID_1 = string | number;

interface IID{
    value: string|number
}



