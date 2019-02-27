console.log('Starting app.js');
//Imports from Node
const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');
// Local Requirements- Modules that ive created and am requiring.
const notes = require('./notes.js');

const argv = yargs.argv;
var command = process.argv[2];
console.log('Command:', command);
console.log('yargs', argv);

if (command === 'add'){
    notes.addNote(argv.title,argv.body);
} else if(command === 'list'){
    notes.getAll();
} else if(command === 'read'){
    notes.getNotes(argv.title);
} else if (command === 'remove'){
    console.log('Removing Note');
}else {
    console.log('command not recognized');
} 

