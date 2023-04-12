
import Circle2 from "./Circle";

class rectangleForInheritance extends Circle2{
    constructor(width, height, radius){
        super(radius)
        this.width = width;
        this.height = height;
    }
    // methods overriding
    print(){
        console.log(this._name);
    }

    calculate(){
        return this.width * this.height; 
    }
}


export default rectangleForInheritance;

