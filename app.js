console.log("starting app.js");

const fs = require("fs");
const os = require("os");
const notes = require("./notes.js");

let user = os.userInfo();

// Updates or creates a "greetings" .txt file.
// Second @param - Object = new note for file
fs.appendFile("greetingss.txt", `Hello ${user.username}!`, err => {
  if (err) {
    console.log("Unable to write file");
  }
});
