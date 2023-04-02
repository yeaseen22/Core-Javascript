

let Person = {
    names: "Hm Nayme",
    email: 'hasan.m.nayem@gmail.com',
    address: {
        city: 'Dhaka',
        country: 'Bangladesh'
    }
}

// Destructuring
let {names, email, address:{city, country}} = Person;
console.log(names, email, city, country);



let arr = [1,2,3,4,5];
let [first,second, , , last] = arr;
console.log(first, second, last);








