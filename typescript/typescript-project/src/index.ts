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
   
    protected _courseCount = 1;
    private readonly city:string  = 'Feni'
    constructor(
        public email: string,
        public name: string,
        private userId: string,
    ){
        
    }

    private deleteToken(){
        console.log('Token deleted');
        
    }

    get getAppEmail():string{
        return `My email is ${this.email}`;
    }

    get courseCount():number{
        return this._courseCount = 10;
    }

    set courseCount(courseNumber){
        if(courseNumber <= 1){
            throw new Error('Course count should be more than 1');
        }
        this._courseCount = courseNumber;
    }

  }

class SubUser extends User{
    isFamilyUser: boolean = true;
    changeCourseCount() {
        this._courseCount = 4;
    }
}

const mySelef = new User('a@gmail.com', 'a', '1');
// mySelef.city = 'b';
// mySelef.city;

// mySelef.deeleteToken(); not allowed

export {};
