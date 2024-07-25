function add(a, b) {
  return a + b;
}

function manipulate(a, b, func) {
  var c = a + b;
  var d = a - b;

  function multiply() {
    var m = func(a, b);
    return c * d * m;
  }
  return multiply;
}

var result = manipulate(3, 4, add);
// console.log(result());

const platform = [
  { id: 1, name: "code abc", havePlayList: 13 },
  { id: 2, name: "new abc", havePlayList: 4 },
  { id: 3, name: "old abc", havePlayList: 33 },
  { id: 4, name: "future abc", havePlayList: 0 },
];
// platform.forEach(function (item, index, arry){
//     // console.log(item.id);
//     // console.log(index);
//     // console.log(arry)
// });

// const platformName = platform.map(function (item){
//     return item.name
// })
// const multiplaHavePlaylist = platform.map((item) => item.havePlayList * 2);
// console.log(multiplaHavePlaylist);
// console.log(platform);

function hello(callback) {
  return callback();
}
function anyThing() {
  return ` I am a callback function`;
}
function anotherOne() {
  return ` I am a callback function from anotherOne`;
}

// console.log(hello(anyThing));
// console.log(hello(anotherOne))


//#region filter 
// const overplayList = platform.filter(function (item) {
//     return item.havePlayList> 10
// })
// console.log(overplayList);

//#region count all playlist with for loop
// let totalPlayList = 0;
// for(let i=0; i < platform.length; i++){
//     totalPlayList += platform[i].havePlayList
//     // console.log(platform[i].havePlayList)
// }
// console.log(totalPlayList);

//#region count all playlist  with reduce function
// const totalPlayList = platform.reduce((total, currentValue) => {    
//     // console.log('current value',currentValue);
//     // console.log('previous value',total)
//     return total + currentValue.havePlayList;
    
// }, 0);
// console.log(totalPlayList)


//#experiment with map with platform object
let totalPlayListWithMap = 0;
const totalPlayListWithMapResult = platform.map((item) => {
  // console.log('under map',item)
  console.log(totalPlayListWithMap+=item.id)
  return totalPlayListWithMap+=item.id;
})
console.log('total result  ',totalPlayListWithMapResult)
console.log('each time',totalPlayListWithMap)