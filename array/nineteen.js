/**
 * @Title compine data from different sources
 */

const courses = [
    {
        id: 'OC1',
        name: 'Javascript All You Need To Know',
        topic: 'javascript',
        price: 2599
    },
    {
        id: 'OC2',
        name: 'Dive Into Node Js',
        topic: 'node js',
        price: 2599
    },
    {
        id: 'OC3',
        name: 'Understand react core feature',
        topic: 'javascript',
        price: 1799
    },
    {
        id: 'OC4',
        name: 'Understand react Advance feature',
        topic: 'javascript',
        price: 2599
    },
    {
        id: 'OC5',
        name: 'Add To Cart - MERN STACK',
        topic: 'mern',
        price: 4099
    },
    {
        id: 'OC6',
        name: 'Make Fun Of Js Array',
        topic: 'javascript',
        price: 1799
    },

]

const discountPrice = {
    OC1: 2099,
    OC2: 2099,
    OC3: 1399,
    OC4: 2099,
    OC5: 3599,
    OC6: 1399,
}

const updatedCourse = courses.reduce((acc, cur) => {
    if (discountPrice[cur.id]) {
        cur.discountPrice = discountPrice[cur.id]
    } else {
        cur.discountPrice = 0;
    }
    acc.push(cur)

    return acc;
}, [])

console.log('discounted price', updatedCourse);


/**
 * @Title Promise chain
 */

function createPromise(id) {
    const randomTime = Math.floor(Math.random() * 2000 + 100);
    return new Promise(resolve => {
        setTimeout(() => {
            console.log(`Processing ${id} - Time ${randomTime}`)
            resolve(id)
        }, randomTime)
    })
}

const ids = [1, 2, 3, 4, 5, 6]
// ids.forEach((v) => {
//     createPromise(v)
// })

const result = ids.reduce((acc, cur) => {
    return acc.then(() => {
        return createPromise(cur)
    })
}, Promise.resolve())

result.then(() => {
    console.log('Done!');

})

