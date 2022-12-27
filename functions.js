// function showMessage(from, text) {

//     from = '*' + from + '*'; // make "from" look nicer
  
//     alert( from + ': ' + text );
//   }
  
//   let from = "Ann";
  
//   showMessage(from, "Hello"); // *Ann*: Hello
  
//   // the value of "from" is the same, the function modified a local copy
//   alert( from ); // Ann

function showMessage(from, text = "no text given") {
    console.log( from + ": " + text );
  }
  
  showMessage("Ann",);