/**
 * handwritten-text-generate project
 * Assumption:
 * 1.User input handling
 *  the user will enter text in the textarea, and it will be rendered on the canvas
 *  the text should support multiple lines if needed.
 * 
 * 2.Font and Styling Options
 *  users should be able to select from multiple handwritten fonts.
 *  users can set the font size, color dynammically.
 * 
 * 3.Text Rendering
 *  The text will be rendered on a fixed-size canvas (600x300px).
 *  The text should be properly aligned and positioned on the canvas.
 *  The font should be loaded dynamically from Google Fonts.   
 * 
 * 4.User Experience
 *  A "Generate" button will update the text on the canvas.
 *  A "Download" button will allow users to save the output as an image.     
 */

function drawText() {
    const canvas = document.getElementById('textCanvas');
    const ctx = canvas.getContext('2d')
    const text = document.getElementById('text-input').value;
    const fontSize = document.getElementById("font-size").value;
    const color = document.getElementById("text-color").value;
    const fontStyle = document.getElementById("font-style").value;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.font = `${fontSize}px '${fontStyle}', cursive`;
    ctx.fillStyle = color;
    ctx.fillText(text, 50, 150);
}

function downloadImage() {
    const canvas = document.getElementById('textCanvas');
    const link = document.createElement('a');
    link.download = "handwritten_text.png";
    link.href = canvas.toDataURL();
    link.click();
}