
const user = {
    id: 1,
    name: 'alice',
    age: 36,
    verified: true,
}

function printUser(input: typeof user) {
    console.log(input.age)
}

function validationForm(formData: { email: string, age: number, isAdmin: boolean }): boolean {
    const { email, age, isAdmin } = formData;
    return email.includes('@') && age > 18
}



