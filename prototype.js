// #region prototype the fundation of js

const personMethods = {

    eat() {
        console.log('person is eating')
    },

    sleep() {
        console.log('perons is sleeping');
    },
    play() {
        console.log('perons is playing');
    }
}


function Person(name, age) {
    let person = Object.create(Person.prototype);

    person.name = name;
    person.age = age;


    // person.eat = personMethods.eat();
    // person.sleep = personMethods.sleep()
    // person.play = personMethods.play()

    return person
}

function PersonWithNew(name, age) {
    // let this = Object.create(PersonWithNew.prototype);

    this.name = name;
    this.age = age;
    // return this
}


// #region use prototype getting all methods in one object
Person.prototype = {
    eat() {
        console.log('person is eating')
    },

    sleep() {
        console.log('perons is sleeping');
    },
    play() {
        console.log('perons is playing');
    }
}

console.log(typeof Person)
console.dir(Person)

//#region real person
const sakib = Person('Sakib', 38)
const tamim = Person('Tamim', 38)

sakib.play()


function test(){}

const sakib2 = new PersonWithNew('Sakib', 23)




