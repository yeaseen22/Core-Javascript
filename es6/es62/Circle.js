

class Circle2 {
    constructor(radius, name, resize) {
      this._radius = radius; // underscore convention to indicate private property
      this._name = name;
      this._resize = resize
    }
  
    get radius() {
      return this._radius;
    }
    
    print(){
        console.log(this._name);
    }

    set radius( v) {
      if (v >= 0) {
        this._radius = v;
      } else {
        console.log('Invalid radius. Must be a positive value.');
      }
    }
  }

  export default Circle2;


