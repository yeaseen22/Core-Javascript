const { Guardian, Studnet, Teacher } = require('./person');
const { Contact, Address } = require('./contact');
const { Department, Subject } = require('./university')

// region guardian ID 1
const guardian = new Guardian(1, 'mr khaled', 'engineer', '75000')


guardian.blood = 'A+'
guardian.contact = new Contact({ id: 1, email: 'khaled@gmail.com', phone: '01011111111', })
guardian.contact.address = new Address({ id: 1, roadNo: '6b', city: 'dhaka city', country: 'bangladesh', region: 'dhaka', postalCode: '1200' })




// console.log('output from guardian', guardian.toString());
// console.log(guardian.contact + '');
// region student ID 1
const student = new Studnet(1, 'Rafiq', 'ST100', guardian)
student.blood = 'B+'
student.contact = new Contact({
    id: 2,
    email: 'rafiq@gmail.com',
    phone: '01011111111',
    alterNativePhone: student.guardian.contact.phone,
    address: student.guardian.contact.address,
})
// console.log('student object', student.contact.toString());




// region Department ID 1
const department = new Department({ id: 1, name: 'SWE' })

student.department = department;

department.subjects = [
    new Subject({ id: 1, name: 'Computer Fundamentals', credit: 4 }),
    new Subject({ id: 2, name: 'Introduction To Software Engineering', credit: 3 }),
    new Subject({ id: 3, name: 'Software Testing', credit: 4 }),
]

const credit = student.department.subjects.reduce((a, b) => a += b.credit, 0)

// console.log(student.department.toString());

// console.log('student credit', credit);


// region Teachers

const dean = new Teacher(1, 'Dr. Md. Asaduzzaman', department.subjects[0], 123456)

// TODO: update dean's information
dean.blood = 'AB+'
dean.department = department
dean.salary = 100000
// dean.employeeId = '123456'
dean.contact = new Contact({
    id: 3,
    email: 'asaduzzaman@gmail.com',
    phone: '01011111111',
    address: new Address({
        id: 2,
        roadNo: '6b',
        city: 'dhaka city',
        country: 'bangladesh',
        region: 'dhaka',
        postalCode: '1200'
    })
})



const teacher1 = new Teacher(2, 'Mr Afzal', department.subjects[1], 12345601)
teacher1.department = department
teacher1.blood = 'AB-'
teacher1.salary = 40
// teacher1.employeeId = '12345601'
teacher1.contact = new Contact({
    id: 4,
    email: 'afzaln@gmail.com',
    phone: '01011111111',
    address: new Address({
        id: 3,
        roadNo: '6b',
        city: 'dhaka city',
        country: 'bangladesh',
        region: 'dhaka',
        postalCode: '1200'
    })
})


const teacher2 = new Teacher(3, 'Mr. Md. Shahidul Islam', department.subjects[2], 123456011)
teacher2.department = department
teacher2.blood = 'AB-'
teacher2.salary = 40
// teacher2.employeeId = '123456011'
teacher2.contact = new Contact({
    id: 5,
    email: 'shahidul@gmail.com',
    phone: '01011111111',
    address: new Address({
        id: 4,
        roadNo: '6b',
        city: 'dhaka city',
        country: 'bangladesh',
        region: 'dhaka',
        postalCode: '1200'
    })
})



department.dean = dean;
department.addTeacher(dean)
department.addTeacher(teacher1)
department.addTeacher(teacher2)

// department.teachers = [teacher1, teacher2]

student.department.teachers.forEach((teacher, index) => {
    console.log(`${index + 1} ${teacher.name} ${teacher.subject.name}`);

})

guardian.addChild(student)

const teacherSalary = guardian.children[0].department.teachers.reduce((acc,cur) => {
    acc += cur.salary;
    return acc;
},0)

// console.log('guardian', guardian.toString());

// console.log('department dean', student);

console.log('teacher salary', teacherSalary);

