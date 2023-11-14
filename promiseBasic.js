let promise = new Promise(function (resolve, reject) {
  // executar function
  resolve(10); //resolveing
});

promise.then(function (value) {
  value++;
  return value;
});

promise.then(function (value) {
  value = value + 10;
  return value;
});

promise.then(function (value) {
  value = value + 20;
  console.log(value);
  return value;
});
