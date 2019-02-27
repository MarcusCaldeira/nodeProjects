console.log('starting notes.js');
//requiring the core node module.
const fs = require('fs');
//This is the addNote command used in app.js
var addNote = (title, body) => {
    //Create an Empty Array
    var notes = [];
    //Make Something for the array. 
    var note = {
        title,
        body
    }; 
    //The variable stores the return value of of readFileSync 
    var notesString = fs.readFileSync('notes-data.json');
    //Grabbing the string and returning it as a variable that holds the array.
    notes = JSON.parse(notesString);



    //Push the Note into the notes empty array.
    notes.push(note);
    /* Call to make a new file with the 
    file name and then we pass the content 
    we want to save, in my case is the stringified notes array. */
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};
var getAll = () =>{
    console.log('Getting All the Notes');
};
var getNote = (title) =>{
    console.log('Getting the note', title);
};
var removeNote = (title) =>{
    console.log('removing the note', title);
}

module.exports ={
    addNote,
    getAll,
    getNote,
    removeNote
}