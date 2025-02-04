export type User = {
    id: Number,
    firstName?: String,
    lastName?: String,
    age: Number,
    score: Number
}

type UserKey = keyof User
type FieldsToAggregate = 'score' | 'age';
type FilterCriteria = Partial<User>;

type AggregatedData = Record<FieldsToAggregate, Number>
type TransformedData = AggregatedData & {
    id: Number,
    fullName: String
}

/**
 * filter user base on criteria
 * @param users 
 * @param filterCriteria 
 * @param fieldToAggrigare 
 */
export const processUserData = (
    users: User[],
    filterCriteria: FilterCriteria = {},
    fieldsToAggregate: FieldsToAggregate[] = []
): TransformedData[] => {
    // Step 1: Filter users based on criteria
    const filteredUsers = users.filter((user) => {
        return Object.entries(filterCriteria).every(
            ([key, value]) => user[key as UserKey] === value
        );
    });

    const aggregatedData = fieldsToAggregate.reduce<AggregatedData>(
        (acc, fields) => {
            acc[fields] = filteredUsers.reduce<number>((sum, user) => {
                const fieldValue = user[fields];
                if (fieldValue === undefined || typeof fieldValue !== 'number') {
                    return sum
                }
                return sum + fieldValue

            }, 0)
            return acc;
        }, {} as AggregatedData
    )

    const transformedData = filteredUsers.map((user) => {
        return {
            id: user.id,
            fullName: `${user.firstName} ${user.lastName || ''}`.trim(),
            ...aggregatedData,
        };
    });

    return transformedData;
}


// Example Usage
const users: User[] = [
    { id: 1, firstName: "Alice", lastName: "Doe", age: 25, score: 90 },
    { id: 3, firstName: "Charlie", lastName: "Brown", age: 25, score: 80 },
];

const filterCriteria: FilterCriteria = { age: 25 }; // Filter users by age
const fieldsToAggregate: FieldsToAggregate[] = ["score", "age"]; // Aggregate 'score' and 'age'

const result = processUserData(users, filterCriteria, fieldsToAggregate);
console.log(result);
