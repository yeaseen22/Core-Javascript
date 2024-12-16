/**
 *  change the background color of the page by clicking the button
 *  add a button to copy the color code
 *  add toast message when copy the color code
 */

// global
let div = null;

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
        if (div !== null) {
            div.remove();
            div = null;
        }
        if(isHexValid(output.value)){
            generateToastMessage(`${output.value} copied`)
        }else{
            alert('Not a valid color code')
        }
    })

    output.addEventListener('keyup', function(e){
        const color = e.target.value;
        if(color && isHexValid(color)){
            root.style.backgroundColor = color;
        }
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

function generateToastMessage(msg) {
    div = document.createElement('div')
    div.innerText = msg;
    div.className = 'toast-message toast-message-slide-in'



    div.addEventListener('click', function () {
        div.classList.remove('toast-message-slide-in')
        div.classList.add('toast-message-slide-out')

        div.addEventListener('animationend', function () {
            div.remove()
            div = null;
        })
    })



    document.body.appendChild(div)
    
}

/**
 * @param {string} color 
 */
function isHexValid(color) {
    if(color.length  !== 7 )return false;
    if(color[0] !== '#') return false;

    color = color.substring(1)
    return /^[0-9A-Fa-f]{6}$/i.test(color);
}

// step 3: colllect all necessary references

// step 4: handle the click event

// step 5: also display the hex code to a disabled input field
// step 6: handle the change button click event
// step 7: handle the copy button click event
// step 8: active toast message 
// step 9: create dynamic toast message
// step 10: clear toast message
// step 11: create isHexValid function
// step 12: implement change handler on input field
// step 13:  prevent copying hex code if it is not valid

