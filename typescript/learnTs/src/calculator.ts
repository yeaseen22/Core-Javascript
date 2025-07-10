
function add(a: number, b: number): number {
    return a + b;
}

const substract = (a: number, b: number): number => a - b;
const multipy = (a: number, b: number): number => a * b;

function divide(a: number, b: number): number {
    if (b == 0) {
        throw new Error(`cannot divide by zero`)
    }
    return a / b
}

function power(base:number,exponent:number = 2):number{
    return Math.pow(base,exponent)  
}

function calculate(operation:string, a:number,b:number=1):number{
    switch(operation){
        case "+": add(a,b);
        case "-": substract(a,b);
        case "*":multipy(a,b);
        case "/": divide(a,b);
        case "^": power(a,b)
        default: throw new Error('invalid operation')
    }
}

calculate("+", 10)






