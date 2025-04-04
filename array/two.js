
const arrp1 = [1,2,3,4,5]
const arrp2 = [6,7,8,9,10]
arrp1.push(11)
// arrp1.push(arrp2)
arrp1.push( ...arrp2)
// Array.prototype.push.apply( arrp1, arrp2)


console.log(arrp1);

const arru1 = [1,2,3,4,5]
const arru2 = [6,7,8,9,10]
arru1.unshift(10)
Array.prototype.unshift.apply( arru1, arru2)


// insert at the given index
const arrs1 = [1,2,3,5,9];
arrs1.splice(3,0,4)

console.log(arrs1);


function customSplice(arr, start, deleteCount, ...itemsToAdd) {
    const result = [];
    const len = arr.length;
  
    // Normalize start index
    start = start < 0 ? Math.max(len + start, 0) : Math.min(start, len);
    deleteCount = deleteCount === undefined ? len - start : Math.min(deleteCount, len - start);
  
    // Get removed elements
    for (let i = start; i < start + deleteCount; i++) {
      result.push(arr[i]);
    }
  
    // Shift existing elements to accommodate new ones
    const tail = arr.slice(start + deleteCount);
  
    // Truncate original array at start
    arr.length = start;
  
    // Insert new items
    for (let i = 0; i < itemsToAdd.length; i++) {
      arr.push(itemsToAdd[i]);
    }
  
    // Append the tail elements back
    for (let i = 0; i < tail.length; i++) {
      arr.push(tail[i]);
    }
  
    return result;
  }
  

  // Create a unique symbol
const customSpliceSymbol = Symbol('customSplice');

// Define the method on Array.prototype
Object.defineProperty(Array.prototype, customSpliceSymbol, {
  value: function(start, deleteCount, ...itemsToAdd) {
    const len = this.length;

    // Normalize start
    start = start < 0 ? Math.max(len + start, 0) : Math.min(start, len);

    // Normalize deleteCount
    deleteCount = deleteCount === undefined ? len - start : Math.min(deleteCount, len - start);

    // Get removed elements
    const removed = this.slice(start, start + deleteCount);

    // Construct the new array structure
    const before = this.slice(0, start);
    const after = this.slice(start + deleteCount);
    const updated = [...before, ...itemsToAdd, ...after];

    // Mutate the original array
    this.length = 0;
    this.push(...updated);

    return removed;
  },
  writable: true,
  configurable: true,
});

const arr = [1, 2, 3, 4, 5];

const removed = arr[customSpliceSymbol](1, 2, 'a', 'b');

console.log(arr);     // [1, 'a', 'b', 4, 5]
console.log(removed); // [2, 3]
