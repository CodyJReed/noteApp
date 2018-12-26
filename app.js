console.log("starting app.js");

const _ = require("lodash");
const fs = require("fs");
const yargs = require("yargs");

const notes = require("./notes.js");

const argv = yargs.argv;
let command = process.argv[2];
console.log(`Command: ${command}`);
console.log("Yargs", argv);

switch (command) {
  case "add":
    notes.addNote(argv.title, argv.body);
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
