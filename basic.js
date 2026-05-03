const fruits = ["banana", "apple", "peach"];

for (let i = 0; i < fruits.length; i++) {
  // console.log(fruits[i]);
}

let str = "Hello";
// console.log(str.charAt(0));
// console.log(str.length);
// console.log(str.toUpperCase());

const myString = "Hello, World!";
const myArray = myString.split(", ");
console.log(myArray);

const upperCaseString = myString.toUpperCase();
// console.log(upperCaseString);

// console.log(isNaN(str));

// scope
{
  var a = 5;
}

// console.log(a);

{
  //    let forlet = 5;
}
// console.log(forlet);

function test() {
  var a1 = "hello";
  let b1 = "bye";

  if (true) {
    let a1 = "HI";
    // var b1 = 'good bye' //this call illigal shadowing
    console.log(a1);
    console.log(b);
  }
}
// test();

// var vs let vs const
// Declaration

// map function

const nums = [1, 2, 3];
const mutiply = nums.map((num, i) => {
  return num * 3 + 1;
});

// console.log(mutiply);

// filter
const moreThenTwo = nums.filter((num, i) => {
  return num > 2;
});
console.log(moreThenTwo);

const sum = nums.reduce(
  (acc, curr) => {
    return acc;
  },
  { nums }
);

const afterReduce = sum.nums.map((n) => {
  return n;
});
// console.log(afterReduce, "hi");


// singleton pattern
class DatabaseConnection {
  constructor() {
    if (DatabaseConnection.instance) {
      return DatabaseConnection.instance;
    }

    this.connection = null;
    this.connect();
    DatabaseConnection.instance = this;
  }

  connect() {
    console.log('Creating new database connection...');
    this.connection = `DB-${Math.random()}`;
  }
  query(sql) {
    return `Executing: ${sql} on ${this.connection}`;
  }

}
const db1 = new DatabaseConnection()
const db2 = new DatabaseConnection()
console.log(db1 === db2);
console.log(db1.query('SELECT * FROM users'));


const ShoppingCart = (function () {
  let instance;

  function createInstance() {
    // Private variables
    let items = [];
    let discountCode = null;
    let taxRate = 0.08;

    return {
      addItem(name, price, quantity = 1) {
        // TODO: Implement
        const existingItem = items.find((item) => item.name === name)

        if (existingItem) {
          existingItem.quantity += quantity
        } else {
          items.push({ name, price, quantity })
        }
      },

      removeItem(name) {
        // TODO: Implement
        const initialLength = items.length;
        items = items.filter(item => item.name !== name)

        if (items.length < initialLength) {
          console.log(`🗑️ Removed ${name} from cart`);
        } else {
          console.log(`⚠️ ${name} not found in cart`);
        }

        return this.getSummary()
      },

      updateQuantity(name, quantity) {
        // TODO: Implement
        const item = items.find((item) => item.name === name)

        if (item) {
          if (quantity < 0) {
            return this.removeItem(name)
          }
          item.quantity = quantity
          console.log(`🔄 Updated ${name} quantity to ${quantity}`);
        } else {
         else {
        console.log(`⚠️ ${name} not found in cart`);
      }
    }

    return this.getSummary()
  },

  getTotal() {
    // TODO: Calculate subtotal, apply discount, add tax
  },

  getSummary() {
    // TODO: Return object with all cart info
    console.log(items);

  },

  clearCart() {
    // TODO: Clear all items
    items = []
  }

  // Add more methods as needed
};
  }

return {
  getInstance() {
    if (!instance) {
      instance = createInstance();
    }
    return instance;
  }
};
}) ();

// Test your implementation
const cart = ShoppingCart.getInstance();

