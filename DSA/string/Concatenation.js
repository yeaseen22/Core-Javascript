





function concatenate(string, string2){
    let res = ''
    for(let c of string){
        res += c
    }
    for(let c of string2){
        res += c;
    }

    return res
}

console.log(concatenate('hello', 'world')) // helloworld

