let greetingVariable: string = 'Hello all world'
let myNum = 6;
myNum.toString()
console.log('checking variable', greetingVariable)
console.log('checking my number',myNum)

// region ts number
let userId: number = 10;
userId.toExponential();
console.log(userId);


// region ts boolean
let isLoggedIn: boolean = false;
console.log(isLoggedIn);


// region ts any
let hero: string; // please not auto infer with that kind of function getHero it can be problematic in future
function getHero() {
    return 'no one from film insdustry'
}
hero = getHero();