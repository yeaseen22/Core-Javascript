// basic object

const microphone = {
  brand: "fiften",
  indicator: true,
  price: 899,
  color: "black",

  startRecording() {
    console.log("start Recording");
  },

  stopRecording: () => {
    console.log("Stop Recording");
  },
};

/**
 * there are two different parts of object
 * 1. noun/adjective (state/data/property/field)
 * 2. verb / (functionalities => start, stop)
 * */

// const testObj = new Object();
// testObj.name = "test Object";
// testObj.time = new Date();
// console.log(testObj);

// object have prototype methods and without prototype base(literator object)

// console.log(Object.keys(microphone));
// console.log(Object.values(microphone));

// object dot notation microphone.brand
// object array notation microphone['brand']

// for(let k in microphone) {
//     let name = 66
//     console.log(k, '\n', microphone['name']);
// }

// object key value pair(its return an 2d array)

// console.log(Object.entries(microphone));

// const array = [
//     [ 'brand', 'fiften' ],
//     [ 'indicator', true ],
//     [ 'price', 899 ],
//     [ 'color', 'black' ],
//   ];

//   return array to object
// console.log(Object.fromEntries(array));

// const empty = {};

// console.log(Boolean(empty));

// const students = [
//     {
//         id: '67de71e5-0eac-474f-ab51-850ba9b31ed5',
//         name: 'Md Al-Amin',
//         email: 'alamin@test.com',
//     },
//     {
//         id: 'ebdf6b78-c32b-4b1d-8574-e8c655b05c1e',
//         name: 'Akib Ahmed',
//         email: 'akib@test.com',
//     },
//     {
//         id: 'ee729e84-a84e-4adf-b32c-4647a7114d5b',
//         name: 'Elias Emon',
//         email: 'elias@test.com',
//     },
// ];

// // update data
// const idToUpdate = 'ee729e84-a84e-4adf-b32c-4647a7114d5b';
// const updatedData = {
//     name: 'Habiba Akhtar',
//     email: 'habiba@test.com',
// };

// const updatedIndex = students.findIndex( (item) => item.id === idToUpdate);
// students[updatedIndex] = {
//     ...students[updatedIndex],
//     ...updatedData
// };

// // delete
// const deleteStudentObj = students.splice( updatedIndex, 1);
// console.log(deleteStudentObj);

// console.log(students);

// // object tranverse
// for(let i in students) {
//     console.log(students[i].name);
// }

// const students2 = {
//   "67de71e5-0eac-474f-ab51-850ba9b31ed5": {
//     id: "67de71e5-0eac-474f-ab51-850ba9b31ed5",
//     name: "Md Al-Amin",
//     email: "alamin@test.com",
//   },

//   "ebdf6b78-c32b-4b1d-8574-e8c655b05c1e": {
//     id: "ebdf6b78-c32b-4b1d-8574-e8c655b05c1e",
//     name: "Akib Ahmed",
//     email: "akib@test.com",
//   },

//   "ee729e84-a84e-4adf-b32c-4647a7114d5b": {
//     id: "ee729e84-a84e-4adf-b32c-4647a7114d5b",
//     name: "Elias Emon",
//     email: "elias@test.com",
//   },
// };

// // adding data
// const std = {
//   id: "ebdf6b72-c32b-4b1d-8578-e8c655b05c14",
//   name: "Feroz Khan",
//   email: "feroz@gmail.com",
// };

// students2[std.id] = std;

// // updating data
// const idToUpdateForStudent2 = "ee729e84-a84e-4adf-b32c-4647a7114d5b";
// const idToUpdateNewObj = {
//   name: "Hm Azizul",
//   email: "hmazizul@gmail.com",
// };

// students2[idToUpdateForStudent2] = {
//   ...students2[idToUpdateForStudent2],
//   ...idToUpdateNewObj,
// };

// // deleted data from obj
// delete students2[idToUpdateForStudent2];

// for (let key in students2) {
//   // console.log(students2[kye]);
// }

// Object.keys(students2).forEach( (key) => {
//     const student = students2[key];
//     console.log(student.name, student.email);
// });

// Object.values(students2).forEach((student) => {
//   // console.log(student);
// });

// const arr = [];
// const arrToObj = {};
// for (let i = 0; i < 5000000; i++) {
//   const o = {
//     id: i,
//     value: i,
//   };
//   arr.push(o);
//   arrToObj[i] = o;
// }

// console.time("array");
// let id = 4999999;
// const obj = arr.find((item) => item.id === id);
// obj.value = 555;
// console.timeEnd("array"); // 104.901ms

// console.time("obj");
// arrToObj[id].value = 999;
// console.timeEnd("obj"); // 0.019ms

// important 3 javascript function
// map, filter, reduce

/**
 * Map [same length as original array]
 * Filter [with filtered item]
 * Reduce [Know one knows]
 */

const numbers = [1, 2, 3, 4, false, "", NaN, 5, 6];

// const learReduce = numbers.reduce(  (acc, cur) => {
//     acc+= cur.toString();
//     return acc;
// }, '');
// console.log(learReduce);

// const learReduce = numbers.reduce((acc, cur) => {
//   if (cur) {
//     acc += cur.toString();
//   }
//   return acc;
// }, "");
// // console.log(learReduce); /// 123456

// const names = [
//   "Ayman",
//   "Abu Rayhan",
//   "Anik",
//   "Elias Emon",
//   "Engr. Sabbir",
//   "Fahim Faisal",
//   "Feroz Khan",
//   "Habib",
//   "HM Azizul",
//   "Hridoy Saha",
//   "Jahid Hassan",
//   "Johir",
//   "Md Al-Amin",
//   "Md Arafatul",
//   "Md Ashraful",
//   "Parvez",
// ];

// const namesGroup = {
//     A: ['Ayman', 'Abu Rayhan', 'Anik'],
//     E: ['Elias Emon', 'Engr. Sabbir'],
//     F: ['Fahim Faisal', 'Feroz Khan'],
// };

// const nameGroup = names.reduce((acc, cur) =>{
//     const firstLetter = cur[0].toUpperCase();
//     if(firstLetter in acc) {
//         acc[firstLetter].push(cur);
//         console.log(cur, "this is testing");
//     } else{
//         acc[firstLetter] = [cur];
//     }
//     return acc;
// }, {});

// // console.log(nameGroup);

// Object.keys(namesGrouped).forEach((groupKey) => {
//     console.log('-----------', groupKey, '-----------');
//     namesGrouped[groupKey].forEach((name) => console.log(name));
//     console.log();
// });

// object array notation

let user = {};
user["likes birds"] = true;
console.log(user["likes birds"]);

//multiword without (sting multi name)
let key = "likes bird2";
user[key] = "Hello key";
// console.log(user[key]);

let key2 = "apple 2";

const user2 = {
  [key2]: 5,
};
// console.log(user2.apple);

const products = {
  product1: {
    name: "Smartphone",
    price: 599,
    description: "A high-quality smartphone.",
    seller: "Seller1",
  },
  product2: {
    name: "Laptop",
    price: 999,
    description: "A powerful laptop for work and gaming.",
    seller: "Seller2",
  },
};

const users = {
  user1: {
    username: "user1",
    email: "user1@example.com",
    password: "hashed_password",
  },
  user2: {
    username: "user2",
    email: "user2@example.com",
    password: "hashed_password",
  },
  // ... More users
};

// property existence test
function hasDiscout(product) {
  return "discount" in product;
}

function displayProductProperties(product) {
  for (let key in product) {
    console.log(`${key} : ${product[key]}`);
  }
}
function authenticateUser(username, password) {
  const user = users[username];
  if (user && user.password === password) {
    return true;
  }
  return false;
}

// const isAuthenticated = authenticateUser("user1", "hashed_password");
let userinfo;
const userProfile = {
  [`${userinfo}`]: "friend",
  post: "public",
};

console.log(userProfile[userinfo]);

// userProfile["private"] = {
//   likes: "friend",
//   posts: "public",
// };

// const likePrivacy = userProfile["privacy"]["likes"];
// console.log(`Likes Prvacy Setting, ${likePrivacy}`);

// const obje = {};
// if (typeof obje === "object") {
//   console.log("it an object");
// }

// const person = { firstName: "John", lastName: "Doe" };
// const { firstName, lastName } = person;

// Create an object called student with properties for "name," "age," "grade," and "subjects." The "subjects" property should be an array of subjects the student is studying. Use a for...in loop to iterate over the properties of the student object and display their values.

const personForTest = {
  name: "Yaseen",
  age: 32,
  grade: "#",
  subject: [
    {
      physics: 33,
      chemistry: 33,
      math: 44,
    },
  ],
};

// for (let key in personForTest.subject) {
//   console.log(key);
// }
// console.log(personForTest.subject[0].chemistry);
// let keyes = "age";
// console.log(keyes in personForTest);
// console.log(personForTest);
for (let chcekc in personForTest) {
  // console.log(chcekc);
}

// in you want see 1st 49 run then add + sing to each code
let codes = {
  49: "Germany",
  41: "Switzerland",
  44: "Great Britain",
  // ..,
  1: "USA",
};

for (let code in codes) {
  // console.log(code);
}

// Cloing and meerging

let userFor = {
  name: "armaan",
  age: 22,
  size: {
    height: 182,
    width: 82,
  },
};

// let clone = {};

// shallow copy
let clone = structuredClone(user);
// for (let keys in userFor) {
// deep copy
//   // also do this with object.assign
//   clone[keys] = user[keys];
// }
// console.log((clone.name = "hello"));

// object InterLinked

function marry(man, woman) {
  woman.husband = man;
  man.wife = woman;

  return {
    father: man,
    mother: woman,
  };
}

// let family = marry({ name: "Asad" }, { name: "Mossamad Akhi" });
// console.log(family);

let userForValue = {
  name: "Jhon",
  age: 30,
};

for (let value of Object.values(userForValue)) {
  console.log(value);
}

for (let value of Object.keys(userForValue)) {
  console.log(value);
}

let price = {
  banana: 1,
  orange: 2,
  meat: 4,
};

let doublePrice = Object.fromEntries(
  Object.entries(price).map((entry) => [entry[0], entry[1] * 2])
);
console.log(doublePrice);
