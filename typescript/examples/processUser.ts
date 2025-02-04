export type User = {
    id: Number,
    firstName: String,
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

