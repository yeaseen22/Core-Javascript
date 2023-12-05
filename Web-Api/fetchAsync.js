const display = document.getElementById("display");

async function getData() {
  const res = await fetch("http://127.0.0.1:5500/Web-Api/fetchData.txt");
  const data = await res.text();

  display.innerText = data;
}
