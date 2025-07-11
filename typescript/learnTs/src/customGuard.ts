// custom type guard

type Fish = {
    swim: () => void;
}

type Bird = {
    fly: () => void;
}

function isFish(pet: Fish | Bird): pet is Fish{
    return (pet as Fish).swim() !== undefined
}


function moves(pet:Fish|Bird){
    if(isFish(pet)){
        pet.swim()
    }else{
        pet.fly()
    }
}

const myFish:Fish = {
    swim: () => console.log('my fish is swimig')
    
}

moves(myFish)