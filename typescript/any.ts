// let data:any;


// data = 'hello',
// data = 123;
// data = {key: 'value'}

let data: unknown;

data = 'hello',
    data = 123;
data = { key: 'value' }

if (typeof data === 'string') {
    console.log(data.toUpperCase()); // safe usage after type check

}

// Type Assertion to Convert unknown to a Specific Type

function processAsString(input: unknown) {
  const str = input as string; // Type assertion
  console.log(str.toUpperCase()); // Risky if input is not actually a string
}

processAsString("Hello"); // Works
processAsString(123); // Runtime error

// More refined way
function processData(input: unknown) {
  if (typeof input === "string") {
    console.log(input.toUpperCase()); // Safe usage as a string
  } else if (typeof input === "number") {
    console.log(input.toFixed(2)); // Safe usage as a number
  } else if (Array.isArray(input)) {
    console.log(input.length); // Safe usage as an array
  } else {
    console.log("Unknown type");
  }
}

processData("Hello");
processData(123);
processData([1, 2, 3]);
