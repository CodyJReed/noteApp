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
// Write current "notes" store to "notes-data.json"
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

// Return all notes with fetchNotes() call
const getAll = () => {
  return fetchNotes();
};

// Return all notes with fetchNotes() call
//Call filter on notes and store returned value in filteredNote
const getNote = title => {
  let notes = fetchNotes();
  let filteredNote = notes.filter(note => note.title === title);
  return filteredNote[0];
};

// Return all notes with fetchNotes() call
//Call filter on notes and saveNotes on returned value in filteredNotes
const removeNote = title => {
  let notes = fetchNotes();
  let filteredNotes = notes.filter(note => note.title !== title);
  saveNotes(filteredNotes);

  return notes.length !== filteredNotes.length;
};

const logNote = note => {
  debugger;
  console.log("--");
  console.log(`Title: ${note.title}`);
  console.log(`Body: ${note.body}`);
};

module.exports = {
  addNote,
  getAll,
  getNote,
  removeNote,
  logNote
};
