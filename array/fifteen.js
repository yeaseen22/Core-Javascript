const arr = [
    [1, 2],
    [3, 4],
    [5, 6],
    [7, 8],
    [9, 10]
]

const reduceRight = arr.reduceRight((acc, cur) => {
    return acc.concat(cur)
}, [])

// console.log(reduceRight);


let products = [
    { name: 'Js cookbook', price: 350 },
    { name: 'head first python', price: 200 },
    { name: 'head first java', price: 400 },
    { name: 'head first python', price: 200 },
    { name: 'head first java', price: 400 },
    { name: 'Js cookbook', price: 350 },
    { name: 'Js cookbook', price: 350 },
]

const invoice = products.reduce((acc, cur) => {
    if (acc[cur.name]) {
        acc[cur.name].quantity++;
        acc[cur.name].price += cur.price;
    } else {
        acc[cur.name] = {
            price: cur.price,
            quantity: 1
        }
    }
    return acc;
}, {})

// console.log('invoice', invoice);

const products2 = [
    { name: 'Pen', price: 10 },
    { name: 'Notebook', price: 40 },
    { name: 'Pen', price: 10 },
    { name: 'Pencil', price: 5 },
    { name: 'Notebook', price: 40 },
    { name: 'Pencil', price: 5 },
    { name: 'Pencil', price: 5 },
  ];
  
const grouping = products2.reduce((acc, {name,price}) => {
    
        if(acc[name]){
            acc[name].quantity++;
            acc[name].totalPrice += price
        }else{
            acc[name] = {
                quantity: 1,
                totalPrice: price
            }
        }

    return acc;
},{})

// console.log(grouping, 'product2');


const groupedObject = products2.reduce((acc, {name,price}) => {
    
    if(acc[name]){
        acc[name].quantity++;
        acc[name].totalPrice += price
    }else{
        acc[name] = {
            name,
            quantity: 1,
            totalPrice: price
        }
    }

return acc;
},[])

console.log(Object.values(groupedObject), 'before grouping');


let grouping2 = Object.values(groupedObject).sort((a,b) => b.totalPrice - a.totalPrice)

console.log('grouping', grouping2);
