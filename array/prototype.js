/**
 * @title: prototype of an array
 */

const arr = [1, 2, 3]
console.log(arr.constructor.prototype);
console.log(Array.prototype);

console.log(Object.getOwnPropertyNames(Array.prototype));

Array.prototype.log = function () {
    console.log(this.join(' | '));

}

arr.log('10, 20')

const names = ['nayme', 'shegufa', 'salvy', 'abir']


names.log()