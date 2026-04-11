
const User = {
    name: 'omar',
    email: 'omar@gmail.com',
    isActive: true
}

function createUser({ name, isActive }: { name: string, isActive: boolean }): { name: string, isActive: boolean } {
    return { name, isActive }
}

createUser({ name: 'omar', isActive: false })


function createCourse(): {} {
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

export { }

const chai = {
    name: 'masala chai',
    price: 20,
    isHot: true
}

let tea: {
    name: string; isPrice: number; isHot: boolean;
} = {
    name: 'ginger tea',
    price: 20,
    isHot: true
}

type Tea = {
    name: string;
    price: number;
    ingradient: string[]
}
const adrakChai: Tea{
    name: 'Adrak Chai',
    price: 20,
    ingradient: ["ginger", "tea leaves"]
}
// region type compatibility structural type and duck type
type Cup = { size: string }
let smallCup: Cup = { size: "200ml" }

let bigCup = { size: '500ml', material: "steal" }
smallCup = bigCup