

type Name = string;
type ID = string | number;

function printId(id: ID) {
    console.log(`you id is ${id}`)
}

printId('123')
printId(123)

type Users = {
    id: ID;
    firstName: string;
    lastName?: string;
    skills: string[]
}

function createUsers(firstName: string, lastName?: string): Users {
    return {
        id: 1,
        firstName,
        lastName,
        skills: []
    } satisfies Users // also can use {as Users}
}


type CB = () => void;

function testCB(cb: CB){
    cb()
}

testCB(() => {
    console.log('test')
})
