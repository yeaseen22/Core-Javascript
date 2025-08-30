
function handleClick(greeting){
    console.log('clicking button with a ',greeting);
    
}


const button2Elem = document.getElementById("second")
console.log(button2Elem);


button2Elem.onclick = function(){
    console.log('second 2');
}

button2Elem.onclick = () => handleClick('Hi');

const countBtnEle = document.getElementById("countBtn");

let count=0;
function handleCount (){
    console.log('counter', count)
    count++;
}

const greetKe = function(){
    console.log('Thank You');
}

countBtnEle.addEventListener('click', handleCount)
countBtnEle.addEventListener('click', greetKe)
// countBtnEle.removeEventListener('click',handleCount)

// dom content loaded
document.addEventListener('DOMContentLoaded', function(){
    console.log('dom loaded')
})

const search = document.getElementById("search")
function handleChangeE(e){
    console.log(`event target ${e.target}`);
    console.log(`target name ${e.target.name}`);
    console.log(`target value ${e.target.value}`);

    console.log(`target type ${e.type}`);
    console.log(`Current target ${e.currentTarget}`);

    console.log('this',this);

    console.log(e);
    
    
    
}
search.addEventListener("change",handleChangeE)