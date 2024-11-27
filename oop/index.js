const { Guardian, Studnet } = require('./person');
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
    new Subject({ id: 1, name: 'Computer', credit: 4 }),
    new Subject({ id: 2, name: 'Introduction To Software Engineering', credit: 3 }),
    new Subject({ id: 3, name: 'Software Testing', credit: 4 }),
]

const credit = student.department.subjects.reduce((a, b) => a += b.credit, 0)

// console.log(student.department.toString());

console.log('student credit', credit);




