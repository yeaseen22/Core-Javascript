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



