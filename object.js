
let user = {
    name: "tapas",
    age: 10,
    "is admin": true
}

user.isSceniorCitizen = false;
user["movie lover"] = false;

console.log('user object', user.isSceniorCitizen);
console.log('user', user["is admin"])


let car = prompt("enter fav car name");

const favCar = {
    [car]: 5
}
console.log('car', favCar);

function Car(name, model) {
    this.naame = name;
    this.model = model;
}

const bmw = new Car("BMW", "X")
console.log(bmw instanceof Car);


