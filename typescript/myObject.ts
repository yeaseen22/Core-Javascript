
const User = {
    name: 'omar',
    email: 'omar@gmail.com',
    isActive: true
}

function createUser({name, isActive}: {name: string, isActive: boolean}): {name: string, isActive: boolean} {
    return {name, isActive}
}

createUser({name: 'omar', isActive: false})


function createCourse():{}{
    return {}
}

// region ts type alias
type User = {
    name: string,
    email: string,
    isActive: boolean
}

function userCreate(user: User): User {
    return user
} 

type cardNumber = {
    cardNumber: number
}
type cardNumberDate = {
    cardDate: string
}

type cardDetails = cardNumberDate & cardNumber & {
    cvv: number
}

export{}