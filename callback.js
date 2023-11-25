const paymentSuccess = true;
const marks = 70;

function enroll(callback) {
  console.log("course enrollment is in prograss.. ");

  setTimeout(function () {
    if (paymentSuccess) {
      callback();
    } else {
      console.log("payment failed");
    }
  }, 2000);
}

function progress(callback) {
  console.log("course on progras...");
  setTimeout(function () {
    if (marks >= 80) {
      callback();
    } else {
      console.log("You could not get enough mark to get certificate");
    }
  }, 3000);
}

function getCertificate() {
  console.log("preparing your certificate");

  setTimeout(function () {
    console.log("Congrats! You Got The Certificate");
  }, 1000);
}

enroll(function () {
  progress(getCertificate);
});
