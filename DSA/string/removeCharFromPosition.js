// Remove character at specified position using a loop
function removeCharAtPosition(s, p) {

    // Check for valid position
    if (p < 0 || p >= s.length) 
        return s;

    // Convert string to array for mutable operations
    let sArr = s.split('');  
    for(let i =p; i < s.length -1; i++){
        sArr[i] = sArr[i+1]
    }

    sArr.pop();

    return sArr.join('')
    
}

let s = "abcde"; 
let p = 1;  
s = removeCharAtPosition(s, p);  
console.log(s);