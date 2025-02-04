interface User {
    readonly dbId: number,
    email: string,
    userId: number,
    googleId?: string,
    // startTrail: () => string,
    startTrail(): string,
    getCoupon(couponName: string): number,
}

interface User{
    githubToken: string,
}

interface Admin extends User{
    role: 'admin' | 'ta' | 'learner'
}

// const hitesh: User = {email: 'he@lco.dev', userId: 100, dbId: 123, 
//     githubToken: 'github',
//     startTrail: () => {
//         return 'trail started'
//     },
//     getCoupon: (name: 'hitesh10') => {
//         return 10
//     }
// }


// hitesh.email = 'h@h.com'
// hitesh.dbId = 1234567890 // not allowed


const hitesh: Admin = {email: 'he@lco.dev', userId: 100, dbId: 123, 
    githubToken: 'github',
    role: 'admin',
    startTrail: () => {
        return 'trail started'
    },
    getCoupon: (name: 'hitesh10') => {
        return 10
    }
}


export {}