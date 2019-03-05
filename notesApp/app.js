//Core Modules First
//NPM Packages
const chalk = require('chalk');
const yargs = require('yargs');
// My Own Files
const getNotes = require('./notes.js')

//Customize Yargs Version
yargs.version('1.1.0')



// Create Add Command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder:{
        title: {
            describe: 'Note Title',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv) {
        console.log('Adding a new note!',argv)
    }
})

//Create Remove Command
 yargs.command({
     command: 'remove',
     describe: 'remove a note',
     handler: function(){
         console.log('Removing THE NOTE!')
     }
 })

 //Create List Command
 yargs.command({
     command:'list',
     describe: 'listing the notes',
     handler:function(){
         console.log('listing all the notes')
     }
 })

 //Create the read command
 yargs.command({
     command: 'read',
     describe: 'reading the notes',
     handler: function(){
         console.log('reading all the notes')
     }
 })


console.log(yargs.argv);


