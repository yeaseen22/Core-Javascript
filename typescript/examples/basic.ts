


// type anotation
let message: string = 'hello'
message = '400'

const age: number = parseInt('12');

const latiture: number = 12.2

const isActive: boolean = true;

// type array anotation
const numbers: number[] = [1, 2, 3, 4]

const names: string[] = ['a', 'b', 'c']


const flags: boolean[] = [true, false, false, true]


// enums
enum Role {
    ADMIN = 5,
    MANAGER,
    USER
}

const userRole = Role.USER


enum Status {
    active = 'active',
    inactive = 'inactive'
}

Status.active
