
// region max method implementation
function max(...numbers) {
    if (numbers.length === 0) return -Infinity; // Handle no arguments case

    let maxNumber = numbers[0];  // Start with the first element
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > maxNumber) {
            maxNumber = numbers[i];
        }
    }
    return maxNumber;
}


// region birthday cake candles
function birthdayCakeCandles(candles) {
    // Write your code here
    let height = candles[0]
    let count = 0;
    for (let i = 0; i < candles.length; i++) {
        if (candles[i] >= height) {
            height = candles[i]
            count = count + 1;
        }
    }
    console.log(count)

}

birthdayCakeCandles([3, 2, 1, 3]) // it not pass all test cases

// region birthday cake candles that pass all test cases
function birthdayCakeCandless(candles) {
    let height = max(...candles)
    let count = 0;
    for (let i = 0; i < candles.length; i++) {
        if (candles[i] === height) {
            count = count + 1
        }
    }
    return count;
}
const result = birthdayCakeCandless([3, 2, 1, 3]) // 2
console.log('result from birthdayCakeCandless ', result);


