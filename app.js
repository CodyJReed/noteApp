console.log("starting app.js");

const _ = require("lodash");
const fs = require("fs");
const yargs = require("yargs");

const notes = require("./notes.js");

const argv = yargs.argv;
let command = argv._[0];
console.log(`Command: ${command}`);
console.log("Yargs", argv);

switch (command) {
  case "add":
    let note = notes.addNote(argv.title, argv.body);
    if (note) {
      console.log("Note added.");
      console.log("--");
      console.log(`Title: ${note.title}`);
      console.log(`Body: ${note.body}`);
    } else {
      console.log("Note already exists.");
    }
    break;

  case "list":
    notes.getAll();
    break;

  case "read":
    notes.getNote(argv.title);
    break;

  case "remove":
    notes.removeNote(argv.title);
    break;

  default:
    null;
    break;
}
