

class Coder {
    // name: string;
    // age: number;
    // language: string;
    secondlanguage!: string;

    constructor(public readonly name: string, private age: number, protected language: string) {
        this.name = name;
        this.age = age;
        this.language = language;
    }

    public getAge() {
        return `My age is ${this.age}`;
    }
}


let person1 = new Coder('John', 30, 'JavaScript');
console.log(person.name);


class WebDev extends Coder {
    constructor(public computer: string, name: string, age: number, language: string) {
        super(name, age, language);
        this.computer = computer;

    }

    public getLang() {
        return `I write ${this.language}`
    }
}
const sara = new WebDev('Mac', 'Sara', 25, 'JavaScript');


interface Musician {
    name: string;
    instrument: string;
    play(action: string): string;
}

class Guitarist implements Musician{
    name: string;
    instrument: string;
    constructor(name: string, instrument: string){
        this.name = name;
        this.instrument = instrument;
    }

    play(action: string){
        return `${this.name} ${action} the ${this.instrument}`
    }
}

const Page = new Guitarist('Jimmy', 'guitar');

class Peeps{
    
}

