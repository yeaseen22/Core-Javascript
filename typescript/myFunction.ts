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

function signUpUser(name: string, email: string, password: string) {}
signUpUser("name", "name@gmail.com", "password");

let loginUser = (name: string, email: string, isPaid: boolean = false) => {};
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


function consoleError(errmsg: string): void{
  console.log(errmsg);
  
}

function handleError(errmsg:string): never{
  throw new Error(errmsg)
}



export {};
