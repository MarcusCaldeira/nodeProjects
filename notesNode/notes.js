// console.log('starting notes.js');
// //requiring the core node module.
// const fs = require('fs');

// //Fetches notes from the file system.
// var fetchNotes = () => {
//     //Fetch the notes
//     try{
//         //The variable stores the return value of of readFileSync 
//         var notesString = fs.readFileSync('notes-data.json');
//         //Grabbing notesString and returning it as a variable that holds the array.
//         return JSON.parse(notesString); 
//     } catch (e){
//         return [];
//     };
// };
// //
// var saveNotes = (notes) => {
//     //Saves data back into the file system. 
//     fs.writeFileSync('notes-data.json', JSON.stringify(notes));   
// };


// //This is the addNote command used in app.js
// var addNote = (title, body) => {
//     //Calls fetchNotes which is an empty array.
//     var notes = fetchNotes();
//     //Make Something for the array. 
//     var note = {
//         title,
//         body
//     }; 
//     /*Stores an array with all the notes that exist in
//      the notes array that have the title of the note you are 
//      trying to create.*/
//     var duplicateNotes = notes.filter((note) => note.title === title);
//     //If There are no duplicates then its pushed onto the list. 
//     if (duplicateNotes.length === 0){
//     //Update the note with the new notes.
//     notes.push(note);
//     //Calling the save notes method and then passing notes(fetchNotes).
//     saveNotes(notes);
//     }
// };








// var getAll = () =>{
//     console.log('Getting All the Notes');
// };
// var getNote = (title) =>{
//     console.log('Getting the note', title);
// };
// var removeNote = (title) =>{
//     console.log('removing the note', title);
// }

// module.exports ={
//     addNote,
//     getAll,
//     getNote,
//     removeNote
// }

console.log('Starting notes.js');

const fs = require('fs');

var fetchNotes = () => {
  try {
    var notesString = fs.readFileSync('notes-data.json');
    return JSON.parse(notesString);
  } catch (e) {
    return [];
  }
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
  var duplicateNotes = notes.filter((note) => note.title === title);

  if (duplicateNotes.length === 0) {
    notes.push(note);
    saveNotes(notes);
    return note;
  }
};

var getAll = () => {
  console.log('Getting all notes');
};

var getNote = (title) => {
  console.log('Getting note', title);
};

var removeNote = (title) => {
  console.log('Removing note', title);
};

module.exports = {
  addNote,
  getAll,
  getNote,
  removeNote
};
