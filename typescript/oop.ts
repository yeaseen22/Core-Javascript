class Chai {
    flavour: string;
    price: number

    // constructor(flavour: string, price: number) {
    //     this.flavour = flavour
    //     this.price = price
    // }
    constructor(flavour: string, price: number) {
        this.flavour = flavour
        this.price = price
    }
}

const masalaChai = new Chai("Ginger", 20)
masalaChai.price = 20

class ChaiAceessModifier {
    public flavour: string = "Masala";
    private secretIngredient = "Cardamon";

    reveal() {
        return this.secretIngredient
    }
}

class Shop {
    protected shopName = "Chai Corder"
}
class Branch extends Shop {
    getName() {
        return this.shopName
    }
}
new Branch().getName


const c = new ChaiAceessModifier()
c.reveal()


class Cup {
    readonly capacity: number = 200

    constructor(capacity: number) {
        this.capacity = capacity
    }
}

class ModernChai {
    private _sugar = 2;

    get sugar() {
        return this.sugar
    }

    set sugar(value: number) {
        if (value > 5) throw new Error('Too Sweat');
        this._sugar = value
    }
}
const su = new ModernChai();
su.sugar = 1;

class EkCHai {
    static shopName = 'chai aur code'

    constructor(public flabour: string) {

    }
}
console.log(EkCHai.shopName);

abstract class Drink {
    abstract make(): void
}

class MyChai extends Drink {
    make() {
        console.log('brewing chai');
    }
}

class Heater {
    heat() { }
}
class ChaiMaker {
    constructor(private header: Heater) { }

    make() {
        this.header = this.header.heat
    }
}
