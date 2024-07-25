let x = 15;
try {
  if (x == "") throw console.log("Empty");
  if (isNaN(x)) throw console.log("not a number");
  x = Number(x);
  if (x < 5) throw console.log("too low");
  if (x > 10) throw new Error("too high");
} catch (err) {
  console.log("There is an error ", err);
} finally {
  console.log("Congratulations your code completedly run");
}
