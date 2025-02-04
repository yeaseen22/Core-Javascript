let score: number | string | boolean = 33;


type User = {
    name: string,
    id: number
}

type Admin = {
    username: string,
    id: number
}

let mySelf: User | Admin = {
    name: 'omar',
    id: 334
}

mySelf = {username: 'my', id: 334}

function getDbId(id: number | string){
    if(typeof id === 'string'){
        id.toLowerCase()
    }
    if(typeof id === 'number'){
        id+2;
    }
}

// region Array

const data: number[] = [1,2,3,4,5]

const data2: string[] = [ '1','2','3','4', '5' ];

const data3: (string | number | boolean)[] = [1,2,3,4,5, '6', 3, 'r', true]

let seatAllotment: 'aisle' | 'middle' | 'window';
seatAllotment = 'aisle'
seatAllotment = 'middle'
seatAllotment = 'window'
// seatAllotment = 'crew' // not allowed


export{}