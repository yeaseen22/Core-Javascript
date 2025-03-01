
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

type FieldsToAggregate = ('score' | 'age')[];

type TransformedUser = {
    id: number;
    fullName: string;
    age: number;
    score: number;
}


function processUserData(users: User1[], criteria: FilterCritieria = {}, fieldsToAggregate: FieldsToAggregate = []) {
    const filteredUsers = users.filter(user => {

        return Object.entries(criteria).every(([key, value]) => user[key as User1Key] === value)
    })

    const aggregatedData = fieldsToAggregate.reduce((acc, field) => {

        acc[field] = filteredUsers.reduce((sum, user) => {
            if (user[field] && typeof user[field] === 'number') {
                return sum + user[field]!;
            }
            return sum;
        }, 0);
        return acc;


    }, {} as Record<typeof fieldsToAggregate[number], number>)

    const transformedData = filteredUsers.map(user => ({
        id: user.id,
        fullName: `${user.firstName} ${user.lastName ?? ''}`.trim(),
        ...aggregatedData,
    }))

    return transformedData
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