function loadData() {
  // create a new request
  const xhr = new XMLHttpRequest();

  // what todo when response arrives
  xhr.onload = function () {
    const container = document.getElementById("demo");
    container.innerHTML = xhr.responseText;
  };

  //   prepare request - - methods: GET, POST, PUT, PATCH, DELETE, OPTIONS
  xhr.open("GET", "./data/data.txt");

  //   request send
  xhr.send();
}
