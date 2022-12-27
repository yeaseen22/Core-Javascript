let obj = {
    score: 0,
}
let msg = `Your score is ${obj.score ?? 10}`  ;
// console.log(msg);

console.log(null ?? undefined ?? 0 ?? ''?? NaN ?? 78);