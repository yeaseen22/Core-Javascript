/* two type of data 
 1 primitive it's defined by js
 number 1 NaN 2 infinity, String aslo backtric ``,
 bloolean, undefined, null
 2 Object type is created by our self
 1 Array, 2 object, 3 function
  */

//  about number
var n = 1451;
var f = 3.14;
var nn = Number(33); /* returning number value */
console.log(nn);
console.log(Number.parseFloat(nn));
console.log(Number.MAX_VALUE);
console.log(Number.MIN_SAFE_INTEGER);
console.log(1/0);
console.log('something' * 10);

//  about string
var str = `String`
var str2 = String('fdfkj');
var str3 = 'String';
var str4 = String(13456);

// about boolean
var b1 = true;
var b2 = false;

 var b3 = Boolean(true);
 var b5 = Boolean(false);
 console.log(b3+ b5);

//  null and undefined
var abc;
var xyz = null;
console.log(abc);
console.log(xyz);

// about type conversion truthy and falsy value
var string = '1000';
var n = 10;

console.log(str * n);
console.log(Number(string));
console.log(Number.parseInt(string));
console.log(n.toString());
console.log(Number(Infinity));
console.log(String(Infinity));
console.log(Boolean(Infinity));
console.log(Boolean(-Infinity))

/* falsy values
0
null
undefined
NnN
*/
console.log(Boolean(""));
console.log(Boolean("fdfjkdjfdjf"))
console.log(Boolean(null));
console.log(Boolean(undefined));
console.log(Boolean(0));
console.log(Boolean(44));
// convert boolean to string
console.log(true)
var x = true;
console.log(x.toString());

var hex = 0Xff;
console.log(hex);
var oct = 0756;
console.log(oct);