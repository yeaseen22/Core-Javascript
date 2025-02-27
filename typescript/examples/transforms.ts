
type User1 = {
    id: number;
    firstName: string;
    lastName?: string;
    age: number;
    score?: number;
}


type User1Key = keyof User1;

type FilterCritieria = {
    [K in User1Key]?: User1[K]
}

type FieldsToAggregate = User1Key[];

function processUserData(users: User1[], cirteria: FilterCritieria = {}, fieldsToAggregate: FieldsToAggregate = []) {
    const filteredUsers = users.filter(user => {
        return Object.entries(cirteria).every(([key, value]) => user[key as User1Key] === value)
    })
}


const users = [
    {
        id: 1,
        firstName: 'John',
        lastName: 'Doe',
        age: 24,
        score: 90
    },
    {
        id: 2,
        firstName: 'Jane',
        age: 22,
    },
    {
        id: 3,
        firstName: 'Tom',
        age: 25,
        score: 95
    }
]

processUserData(users, { age: 24 }, ['score']);