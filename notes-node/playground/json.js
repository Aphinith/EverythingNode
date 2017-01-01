// var obj = {
//   name: 'Aralya'
// }

// var stringObj = JSON.stringify(obj);

// console.log(typeof stringObj);
// console.log(stringObj);

// var personString = '{"name": "Aralya", "age": 32}';
// var person = JSON.parse(personString);
// console.log(typeof person);
// console.log('person: ', person);
// console.log(`This is the person's first name: ${person.name}, and he is ${person.age} years old.`);

const fs = require('fs');

var originalNote = {
  title: 'Some title',
  body: 'Some sort of body'
}

var originalNoteString = JSON.stringify(originalNote);

fs.writeFileSync('notes.json', originalNoteString);

var noteString = fs.readFileSync('notes.json');
var note = JSON.parse(noteString);

console.log(typeof note);
console.log(`This is title: ${note.title} and this is the body: ${note.body}`);