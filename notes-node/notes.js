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
    return note;
  } else {
    return 'duplicate';
  }

};

var getAll = () => {
  console.log('Getting all titles!');
};

var getNote = (note) => {
  console.log('Getting note: ', note);
};

var removeNote = (title) => {
  var notes = fetchNotes();
  var filteredNotes = notes.filter((note) => note.title !== title);

  if (filteredNotes.length < notes.length) {
    saveNotes(filteredNotes);
    return `${title} has been removed from list.`
  } else {
    return 'Title does not not exist - nothing to remove.'
  }
}

module.exports = {
  addNote,
  getAll,
  getNote,
  removeNote
}