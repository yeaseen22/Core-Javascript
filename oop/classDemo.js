// class expression
const Datastructure = class {

}
let ds = new Datastructure()
console.log(ds)

// class declaration
class DataStrucure{
    constructor(){
        this.storage = []
    }
    insert(value){
        this.storage.push(value)

        return this.storage;
    }
    unshiftInser(value){
        this.storage.unshift(value)

        return this.storage
    }
}
let dsa = new DataStrucure()
// console.log(dsa.insert(2))
// console.log(dsa.insert(3))
// console.log(dsa.insert(4))
// console.log(dsa.insert(5))
// console.log(dsa.unshiftInser(10))






