// student profile project

type Student = {
    name: string;
    age: number;
    isEnrolled: boolean;
    courses: string[];
    scores: number[];
    info: [string, number, boolean]
}

const student1:Student = {
    name: 'Mamun',
    age: 20,
    isEnrolled: true,
    courses: ['Js'],
    scores: [22, 33],
    info: ["mamun", 22, true]
}

function dispalyStudent(student:Student):void{
    console.log(student.name);
}

dispalyStudent(student1)




