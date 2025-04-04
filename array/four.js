
const numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14];

// remove element
numbers.shift()
numbers.length = numbers.length-1;
numbers.pop()

numbers.splice(2,1)

let toBeDeleted = 6;
for(let i=0; i < numbers.length; i++){
    if(numbers[i] === toBeDeleted){
        numbers.splice(i, 1);
        break;
    }
}


