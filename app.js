console.log("starting app.");

const fs = require("fs");

fs.appendFile("greets.txt", "Hello World!", err => {
  if (err) {
    console.log("Unable to write file");
  }
});
