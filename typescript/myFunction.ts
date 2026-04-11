// region function

function addTwo(num: number): number {
  return num + 2;
  // return "hello";
}

function getUpper(val: string) {
  return val.toUpperCase();
}

let myValue = addTwo(5);
getUpper("hello");

function signUpUser(name: string, email: string, password: string) { }
signUpUser("name", "name@gmail.com", "password");

let loginUser = (name: string, email: string, isPaid: boolean = false) => { };
loginUser("name", "name@gmail.com");

// function getValues (val: number):string{
//   if(val > 5){
//     return true;
//   }
//   return "200 OK"
// }

const hello = (s: string): string => {
  return "";
};

const heros = ["omar", "abu bakar", "osman", "ali"];
heros.map((hero: string): string => {
  return `hero is ${hero}`;
});


function consoleError(errmsg: string): void {
  console.log(errmsg);

}

function handleError(errmsg: string): never {
  throw new Error(errmsg)
}



export { };

function makeChai(type: string, cup: number) {
  console.log('make ' + cup ' cup of ' + type);

}
makeChai('masala', 5)

function getChaiPrice(): number {
  return 10
}
getChaiPrice()
function makeOrdrer(order: string) {
  if (!order) return null
  return order
}

function logChai(): void {
  console.log('chai is ready');
}

function orderChai(type?: string) {

}

function orderChai2(type: string = 'masala')

function createChai(order: { type: string; sugar: number; size: 'small' | 'mediam' | 'large' }): number {
  return 4
}
