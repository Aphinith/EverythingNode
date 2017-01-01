console.log('starting app.js');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');
const notes = require('./notes.js');

const argv = yargs.argv;


// console.log('Process: ', process.argv);
// console.log('Yargs: ', argv);

var command = argv._[0];
console.log('command: ', command);

if (command === 'add') {
  var note = notes.addNote(argv.title, argv.body);
  if (note === 'duplicate') {
    console.log(`Could not add new note, the title ${argv.title} may already exist or is not a valid note.`);
  } else {
    console.log(`The following has been added:\nTitle: ${note.title}\nBody: ${note.body}`);
  }
} else if (command === 'list') {
  notes.getAll();
} else if (command === 'read') {
  var note = notes.getNote(argv.title);

  if (note) {
    console.log(`Title: ${note.title} \nBody: ${note.body}`);
  } else {
    console.log(`${argv.title} does not exist in list.`);
  }
} else if (command === 'remove') {
  var note = notes.removeNote(argv.title);
  console.log(note);
} else {
  console.log('Command not found!');
};