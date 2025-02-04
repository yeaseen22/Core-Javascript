
// const user:(string | number)[] = ['hc',1]

let user: [string, number, boolean];
user = ['hc', 1, true]


let rgb: [number, number, number] = [255, 123, 112]


type User = [number, string];


const newUser: User = [112, 'example@google.com']

newUser[1] = 'hc.com'
newUser.push(1)

export {}