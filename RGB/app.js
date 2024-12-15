/**
 * change the background color of the page by clicking the button
 *  add a button to copy the color code
 */

// step 1: create onload handler
window.onload = () => {
    main()
}
function main() {
    const root = document.getElementById('root')
    const chnageBtn = document.getElementById('change-btn')
    const output = document.getElementById('output')
    const copyBtn = document.getElementById('copy-btn')


    chnageBtn.addEventListener('click', function () {
        const bgColor = generateHEXColor();
        root.style.backgroundColor = bgColor
        output.value = bgColor;
    })


    copyBtn.addEventListener('click', function () {
        navigator.clipboard.writeText(output.value)
    })
}

// step 2: generate a random color generator function
// function generateRGBColor() {
//     // rgb(0,0,0), rgb(255,255,255)
//     const red = Math.floor(Math.random() * 255)
//     const green = Math.floor(Math.random() * 255);
//     const blue = Math.floor(Math.random() * 255);


//     return `rgb(${red},${green},${blue})`
// }

function generateHEXColor() {
    // #000000 #ffffff

    const red = Math.floor(Math.random() * 255)
    const green = Math.floor(Math.random() * 255);
    const blue = Math.floor(Math.random() * 255);


    return `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`
}

// step 3: colllect all necessary references

// step 4: handle the click event

// step 5: also display the hex code to a disabled input field
// step 6: handle the change button click event
// step 7: handle the copy button click event
