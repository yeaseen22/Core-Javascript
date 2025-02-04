"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log("hello typescript");
// class User {
//   public email: string;
//   private name: string;
//   private readonly city:string  = 'Feni'
//   constructor(email: string, name: string) {
//     this.email = email;
//     this.name = name;
//     this.city;
//   }
// }
class User {
    constructor(email, name, userId) {
        this.email = email;
        this.name = name;
        this.userId = userId;
        this._courseCount = 1;
        this.city = 'Feni';
    }
    deleteToken() {
        console.log('Token deleted');
    }
    get getAppEmail() {
        return `My email is ${this.email}`;
    }
    get courseCount() {
        return this._courseCount = 10;
    }
    set courseCount(courseNumber) {
        if (courseNumber <= 1) {
            throw new Error('Course count should be more than 1');
        }
        this._courseCount = courseNumber;
    }
}
class SubUser extends User {
    constructor() {
        super(...arguments);
        this.isFamilyUser = true;
    }
    changeCourseCount() {
        this._courseCount = 4;
    }
}
const mySelef = new User('a@gmail.com', 'a', '1');
