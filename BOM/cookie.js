function Setcookie(cname, cvalue, exdays) {
  const d = new Date();
  d.setTime(d.getDate() + exdays * 24 * 60 * 1000);
  let expires = "expires=" + d.toUTCString();

  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  // name=armaa armaa; username=armaa
  console.log(document.cookie);

  let name = cname + "=";
  let ca = document.cookie.split(";");
  console.log(ca);

  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];

    while (c.charAt(0) === " ") {
      c = c.substring(1);
    }

    if (c.indexOf(name) === 0) {
      return c.substring(name.length);
    }
  }

  return "";
}

function checkCookie(cname, exdays) {
  let a = getCookie(cname);
  if (a != "") {
    alert("Welcome again " + a);
  } else {
    names = prompt("please enter your name ", "");
    if (names != "" && names != null) {
      Setcookie(cname, names, exdays);
    }
  }
}
