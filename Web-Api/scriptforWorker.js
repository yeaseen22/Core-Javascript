let w;
function startWorker() {
  if (typeof Worker !== "undefined") {
    // worker available

    // if w worker is not already defined
    if (typeof w == "undefined") {
      w = new Worker("worker.js");
    }
    // listing for worker events/message
    w.onmessage = function (event) {
      document.getElementById("demo").innerHTML = event.data;
    };
  } else {
    alert("Your Browser doesn/s support web worker");
  }
}

function stopWorker() {
  if (typeof Worker !== "undefined") {
    w.terminate();
    w = undefined;
  } else {
    alert("Your Browser doesn/s support web worker");
  }
}
