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
      notes.logNote(note);
    } else {
      console.log("Note already exists.");
    }
    break;

  case "list":
    notes.getAll();
    break;

  case "read":
    let noteToRead = notes.getNote(argv.title);
    if (noteToRead) {
      console.log("Note Read.");
      notes.logNote(noteToRead);
    } else {
      console.log("Note not found.");
    }
    break;

  case "remove":
    let noteRemoved = notes.removeNote(argv.title);
    let msg = noteRemoved ? "Note was removed" : "Note not found";
    console.log(msg);
    break;

  default:
    null;
    break;
}
