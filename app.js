console.log("starting app.");

const fs = require("fs");

// Updates or creates a "greets" .txt file.
// Second @param - String = new note for file
fs.appendFile("greets.txt", "Hello World!", err => {
  if (err) {
    console.log("Unable to write file");
  }
});
