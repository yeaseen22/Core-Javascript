// Array Destructuring
// Object Destructuring

const classTen = {
    classTeacher: 'Mr, Zahid Hasan',
    student: 67,
    goodAt: {
        math: 20,
        english: 10,
        science: 17,
        other: 20
    }
}

const {classTeacher: teacher, student, goodAt: {math, english}} = classTen;
console.log(teacher, student, goodAt);
// const {math, english} = goodAt;
console.log(math, english)

let array = ['math', 'science', 'ict', 'english',["first", 'seff'] ,'bangla'];
// console.log(array[0])
// console.log(array[1])

// const [first, , , ,h] = array 
// console.log( h, )


