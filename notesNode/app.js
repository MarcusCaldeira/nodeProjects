console.log('Starting app.js');
//Imports from Node
const fs = require('fs');
const _ = require('lodash');
// Local Requirements- Modules that ive created and am requiring.
const notes = require('./notes.js');

var command = process.argv[2];
console.log('Command:', command);

if (command === 'add'){
    console.log('adding new note'); 
} else if(command === 'list'){
    console.log('listing all notes');
} else if(command === 'read'){
    console.log('reading');
} else if (command === 'remove'){
    console.log('Removing Note');
}else {
    console.log('command not recognized');
} 

