const display = document.getElementById("display");

function getData() {
  fetch("http://127.0.0.1:5500/Web-Api/fetchData.txt")
    .then((res) => {
      return res.text();
    })
    .then((data) => {
      display.innerText = data;
    });
}
