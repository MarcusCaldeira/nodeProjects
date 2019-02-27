/*This converts an object into a string */
// var obj = {
//     Name: 'Marcus'
// };

// var stringObj = JSON.stringify(obj);
// console.log(typeof stringObj);
// console.log(obj);


/*This converts a string into an object */
// var personString = '{"Name": "Marcus", "Age": "27"}';
// var person = JSON.parse(personString);
// console.log(typeof person);
// console.log(personString);

/*Store String in a file then read it back and print its properties */
const fs = require('fs');

var originalNote = {
  title: 'Some title',
  body: 'Some body'
};
var originalNoteString = JSON.stringify(originalNote);
fs.writeFileSync('notes.json', originalNoteString);

var noteString = fs.readFileSync('notes.json');
var note = JSON.parse(noteString);
console.log(typeof note);
console.log(note.title);
