// #region Array Destructuring
//#region Object Destructuring

const classTen = {
  classTeacher: "Mr, Zahid Hasan",
  student: 67,
  goodAt: {
    math: 20,
    english: 10,
    science: 17,
    other: 20,
  },
};

const {
  classTeacher: teacher,
  student,
  goodAt: { math, english },
} = classTen;
// console.log(teacher, student, goodAt);
// const {math, english} = goodAt;
// console.log(math, english);

let array = ["math", "science", "ict", "english", ["first", "seff"], "bangla"];
// console.log(array[0])
// console.log(array[1])

// const [first, , , ,h] = array
// console.log( h, )

const user = {
  id: 1,
  names: "john",
  email: "john@gmail.com",
  address: {
    street: "123 main st",
    city: "new york",
    country: "usa",
  },
  hobbies: ["reading", "cooking", "traveling"],
};

// Destructuring nested object
const {
  names,
  email,
  address: { city },
} = user;

// console.log(names);

const [, secondHobbies] = user.hobbies;

// console.log(secondHobbies);

const getUserInfo = ({ names, email }) => {
  console.log(names);
};
// getUserInfo(user);

// #region Product service function
const ProductService = (() => {
  const products = [
    { id: 1, name: "iPhone", price: 999 },
    { id: 2, name: "Samsung Galaxy", price: 899 },
    { id: 3, name: "Google Pixel", price: 799 },
  ];

  const addProduct = ({ id, name, price }) => {
    const product = { id, name, price };
    products.push(product);
    console.log(`Product added: ${product.name}`);
  };

  const updateProduct = ({ id, ...rest }) => {
    const product = products.find((p) => p.id === id);

    if (product) {
      Object.assign(product, rest);
      console.log(`Product updated: ${product.name}`);
    } else {
      console.log("Product not found");
    }
  };

  const deleteProduct = (id) => {
    const index = products.findIndex((p) => p.id === id);

    if (index !== -1) {
      const deletedProduct = products.splice(index, 1)[0];
      console.log(`Product deleted: ${deletedProduct.name}`);
    } else {
      console.log("Product not found");
    }
  };

  const getProduct = (id) => {
    const product = products.find((p) => p.id === id);

    if (product) {
      console.log(`Product details for ID ${id}:`, product);
    } else {
      console.log("Product not found");
    }
  };

  return {
    addProduct,
    updateProduct,
    deleteProduct,
    getProduct,
  };
})();

// Usage
const newProduct = { id: 4, name: "Sony Xperia", price: 699 };
ProductService.addProduct(newProduct);

const updatedProduct = { id: 2, price: 799 };
ProductService.updateProduct(updatedProduct);

ProductService.deleteProduct(3);

ProductService.getProduct(1);

// Application to calculate the total price of products

// Function to calculate the total price of products
function calculateTotalPrice(...products) {
  // Spread operator is used to pass an indefinite number of products as arguments

  // Calculate the total price
  const totalPrice = products.reduce((sum, product) => sum + product.price, 0);

  // Return the total price
  return totalPrice;
}

// Sample products
const products = [
  { name: "iPhone", price: 999 },
  { name: "Samsung Galaxy", price: 899 },
  { name: "Google Pixel", price: 799 },
];

// Calculate the total price using spread operator
const totalPrice = calculateTotalPrice(...products);

// Display the total price
// console.log(`Total Price: $${totalPrice}`);

let [firstN, lastN] = "Jhon Smit".split(" ");
console.log(firstN, lastN);

// assign from right side
let [a, b, c] = "abc";
let [one, two, three] = new Set([1, 2, 3]);

// assign from left side
let userForLeft = {};
[userForLeft.name, userForLeft.surname] = "Jhon Smit".split(" ");

// with loop
for (let [key, value] of Object.entries(userForLeft)) {
  console.log(`${key}: ${value}`);
}

// Swap Variable trick

let guest = "Jane";
let admin = "pete";

// swap the places
[guest, admin] = [admin, guest];

// use rest also
let [name1, name2, ...rest] = [
  "Julius",
  "Caesar",
  "Consul",
  "of the Roman Republic",
];

// set default also
let [name = "Guest", surname = "Anonymous"] = ["Julius"];

let option = {
  title: "Menu",
  width: 100,
  height: 200,
};

// let { title, width, height } = option;

({ title, width, height } = { title: "menu", widht: 200, height: 100 });

let options = {
  size: {
    widht: 100,
    height: 200,
  },
  items: ["Cake", "Donut"],
  extra: true,
};

let {
  size: { widht, height },
  items: [item1, item2],
  title = "menu",
} = options;








