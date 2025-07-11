"use strict";
// custom type guard
function isFish(pet) {
    return pet.swim() !== undefined;
}
function moves(pet) {
    if (isFish(pet)) {
        pet.swim();
    }
    else {
        pet.fly();
    }
}
const myFish = {
    swim: () => console.log('my fish is swimig')
};
moves(myFish);
