const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');
const notes = require('./notes.js');

const titleOptions = {
  describe: 'Title of note',
  demand: true,
  alias: 't'
};

const bodyOptions = {
  describe: 'Description of note',
  demand: true,
  alias: 'b'
};

const argv = yargs
  .command('add', 'Add a new note', {
    title: titleOptions,
    body: bodyOptions
  })
  .command('list', 'List all notes')
  .command('read', 'Read a note', {
    title: titleOptions
  })
  .command('remove', 'Remove a note', {
    title: titleOptions
  })
  .help()
  .argv;

var command = argv._[0];

if (command === 'add') {
  var note = notes.addNote(argv.title, argv.body);
  if (note === 'duplicate') {
    console.log(`Could not add new note, the title ${argv.title} may already exist or is not a valid note.`);
  } else {
    console.log('Note added:');
    notes.logNote(note);
  }
} else if (command === 'list') {
  var allNotes = notes.getAll();
  console.log(`Printing ${allNotes.length} note(s):`)
  allNotes.forEach((note) => notes.logNote(note));
} else if (command === 'read') {
  var note = notes.getNote(argv.title);

  if (note) {
    console.log('Note found:');
    notes.logNote(note);
  } else {
    console.log(`${argv.title} does not exist in list.`);
  }
} else if (command === 'remove') {
  var note = notes.removeNote(argv.title);
  console.log(note);
} else {
  console.log('Command not found!');
};