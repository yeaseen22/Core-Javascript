

// global.a = 5; or
// this.a = 5; // this refer to window then see in browser

function getPeram(){
    // console.log(this.a)
}
getPeram();

let user = {
    name: 'piyush',
    age: 22,
    childObj: {
        newName: 'Roadside Coder',
        getDetails(){
            // console.log(this.newName);
        }
    }
}

user.childObj.getDetails()


let user2 = {
    name: 'piyush',
    age: 22,
    getDetails: () => {
        // console.log(this);
    }
}
user2.getDetails();



let user3 = {
    name: 'piyush',
    age: 22,
    getDetails ()  {
        const arrowForGetDe = () => {
            // console.log(this.name);
        }
        arrowForGetDe()
    }
}
user3.getDetails();


class user4 {
    constructor(n){
        this.name = n;
    }

    getName() {
        console.log(this.name);
    }
}

const User = new user4('Armaan')
console.log(User);