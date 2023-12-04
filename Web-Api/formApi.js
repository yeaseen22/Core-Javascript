function validation() {
  const inputObj = document.getElementById("id1");

  if (inputObj.validity.rangeOverflow) {
    inputObj.setCustomValidity("You Have Made a range overflow error");
  } else if (inputObj.validity.rangeUnderflow) {
    inputObj.setCustomValidity("You Have Made a range underflow error");
  }
  if (!inputObj.checkVisibility()) {
    document.getElementById("demo").innerHTML = inputObj.validationMessage;
  }
}
