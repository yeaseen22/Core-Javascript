// Array Destructuring
// Object Destructuring

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
getUserInfo(user);
