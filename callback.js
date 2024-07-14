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

// enroll(function () {
//   progress(getCertificate);
// });

function createMiddleware() {
  const middlewares = [];

  function use(middleware) {
    middlewares.push(middleware);
  }

  console.log(middlewares);

  function runMiddlewares(req, res, finalHandler) {
    let index = 0;

    function next(err) {
      if (err) {
        return finalHandler(err);
      }
      if (index >= middlewares.length) {
        return finalHandler();
      }
      const middleware = middlewares[index++];
      middleware(req, res, next);
    }
    next();
  }
  return { use, runMiddlewares };
}

const app = createMiddleware();

app.use((req, res, next) => {
  req.user = { name: "Alice" };
  next();
});

app.use((req, res, next) => {
  if (req.user.name !== "ll") {
    return next(new Error("Unauthorized"));
  }
  next();
});

app.runMiddlewares({ url: "/home" }, {}, (err) => {
  if (err) {
    console.error(err.message);
  } else {
    console.log("All middlewares executed successfully.");
  }
});
