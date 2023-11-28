function validateForm() {
  const form = document.forms["myForm"];
  const value = form["fname"].value;

  if (value === "") {
    alert("you must type name");
    return false;
  }
}
