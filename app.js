const _ = require("lodash");
const fs = require("fs");
const yargs = require("yargs");

const notes = require("./notes.js");
// Command line Options
const titleOptions = {
  describe: "Title of note",
  demand: true,
  alias: "t"
};
const bodyOptions = {
  describe: "Body of note",
  demand: true,
  alias: "b"
};
// Command line INPUT using yargs
const argv = yargs
  .command("add", "Add a new note", {
    title: titleOptions,
    body: bodyOptions
  })
  .command("list", "List all notes")
  .command("read", "Read a note", {
    title: titleOptions
  })
  .command("remove", "Remove a note", {
    title: titleOptions
  })
  .help().argv;

// Store user input from CLI in "command"
let command = argv._[0];

// Check "command" value for condition
switch (command) {
  case "add":
    var note = notes.addNote(argv.title, argv.body);
    if (note) {
      console.log("Note added.");
      notes.logNote(note);
    } else {
      console.log("Note already exists.");
    }
    break;

  case "list":
    var allNotes = notes.getAll();
    console.log(`Printing ${allNotes.length} notes(s).`);
    allNotes.forEach(note => notes.logNote(note));
    break;

  case "read":
    note = notes.getNote(argv.title);
    if (note) {
      console.log("Note Read.");
      notes.logNote(note);
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
