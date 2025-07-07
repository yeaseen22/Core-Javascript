"use strict";
// student profile project
const student1 = {
    name: 'Mamun',
    age: 20,
    isEnrolled: true,
    courses: ['Js'],
    scores: [22, 33],
    info: ["mamun", 22, true]
};
function dispalyStudent(student) {
    console.log(student.name);
}
dispalyStudent(student1);
