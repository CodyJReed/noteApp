console.log("starting app.");

const fs = require("fs");
const os = require("os");

let user = os.userInfo();

// Updates or creates a "greets" .txt file.
// Second @param - Object = new note for file
fs.appendFile("greets.txt", `Hello ${user.username}!`, err => {
  if (err) {
    console.log("Unable to write file");
  }
});
