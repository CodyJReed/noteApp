console.log("Starting notes.js");

const fs = require("fs");

const fetchNotes = () => {
  // Check for "notes-data.json" in fs; if true set value = notes
  try {
    let noteString = fs.readFileSync("notes-data.json");
    return JSON.parse(noteString);
  } catch (error) {
    return [];
  }
};

const saveNotes = notes => {
  fs.writeFileSync("notes-data.json", JSON.stringify(notes));
};

const addNote = (title, body) => {
  let notes = fetchNotes();
  let note = {
    title,
    body
  };

  //Filter through @array - notes, and store any matching note = duplicateNotes
  let duplicateNotes = notes.filter(note => note.title === title);
  // Check for duplicateNotes
  if (duplicateNotes.length === 0) {
    notes.push(note);
    saveNotes(notes);
    return note;
  }
};

const getAll = () => {
  console.log("Getting all notes.");
};

const getNote = title => {
  console.log(`Getting note: ${title}`);
};

const removeNote = title => {
  let notes = fetchNotes();
  let filteredNotes = notes.filter(note => note.title !== title);
  saveNotes(filteredNotes);
};

module.exports = {
  addNote,
  getAll,
  getNote,
  removeNote
};
