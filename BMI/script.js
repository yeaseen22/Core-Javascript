
let height = document.getElementById("height")
let weight = document.getElementById("weight")
let button = document.getElementById("btn")
let score = document.getElementById("score")
let result = document.querySelector(".result")

console.log('height', height, 'weight', weight, 'button', button, 'score', score, 'result', result);

button.addEventListener('click', function (e) {
    // e.preventDefault();
    let newHeight = parseFloat(height.value);
    let newWeight = parseFloat(weight.value);

    newHeight = newHeight / 100;
    let sqrHeight = newHeight * newHeight;

    let bmi = newWeight / sqrHeight;

    score.textContent = bmi.toFixed(2);
    result.style.display = 'block';

    if (score.textContent < 18.6) {
        score.style.background = '#ffeaa7';
    } else if (score.textContent < 24.9) {
        score.style.background = '#55efc4';
    } else {
        score.style.background = '#d63031';

    }
})


let form = document.getElementById("form");
form.addEventListener('submit', function (e) {
    e.preventDefault();

})


