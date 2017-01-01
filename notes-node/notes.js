console.log('Starting notes.js');

var addNote = (title, body) => {
  console.log('Adding note: ', title, body);
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