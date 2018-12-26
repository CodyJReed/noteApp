console.log("starting app.js");

const _ = require("lodash");
const fs = require("fs");
const os = require("os");
const notes = require("./notes.js");

// let user = os.userInfo();
//
// // Updates or creates a "greetings" .txt file.
// // Second @param - Object = new note for file
// fs.appendFile(
//   "greetings.txt",
//   `Hello ${user.username}! You're ${notes.age}.`,
//   err => {
//     if (err) {
//       console.log("Unable to write file");
//     }
//   }
// );

let res = notes.addNote();
console.log(res);

console.log(`Result: ${notes.add(6, 10)}`);
