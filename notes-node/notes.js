console.log('Starting notes.js');

const fs = require('fs');

var fetchNotes = () => {
  try {
    var notesString = fs.readFileSync('notes-data.json');
    return JSON.parse(notesString);
  } catch (e) {
    return [];
  };
};

var saveNotes = (notes) => {
  fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};

var addNote = (title, body) => {
  var notes = fetchNotes();
  var note = {
    title,
    body
  };
  var duplicatNotes = notes.filter((note) => note.title === title);

  if (duplicatNotes.length === 0) {
    notes.push(note);
    saveNotes(notes);
  } else {
    console.log('Title already exists!');
  }

};

var getAll = () => {
  console.log('Getting all titles!');
};

var getNote = (note) => {
  console.log('Getting note: ', note);
};

var removeNote = (note) => {
  console.log('Removing this note: ', note);
}

module.exports = {
  addNote,
  getAll,
  getNote,
  removeNote
}