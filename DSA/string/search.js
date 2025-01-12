
/**
 * @param {string} s
 * @param {string} ch
 */

function findCh(s, ch){
    let n = s.length;
    for(let i=0; i< n; i++){
        if(s[i] === ch){
            return i
        }

        return -1;
    }
    
}
findCh("Hello World", "o")




