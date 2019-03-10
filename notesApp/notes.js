const fs = require('fs');



const getNotes = function(){
    return 'Your Notesss....'
}
const addNote = function(title,body){
    //Loads in the notes. 
    const notes = loadNotes();
    //filter the array to check for duplicate titles.
    const duplicateNotes = notes.filter(function(note){
        return note.title === title
    })
    if (duplicateNotes.length === 0){
    // change the notes. 
    notes.push({
        title: title, 
        body: body
    })
    //saved the notes. 
    saveNotes(notes)
    console.log('New Note Added')
    } else{
        console.log('note title taken')
    }

}
const saveNotes = function(notes){
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}
//This Will Load Notes if the notes.json exists, if it doesnt then 
const loadNotes = function(){
    try{
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON); 
    } catch (e){
        return [];


    }


    const dataBuffer = fs.readFileSync('notes.json');
    const dataJSON = dataBuffer.toString()
    return JSON.parse(dataJSON); 
}

module.exports = {
    getNotes: getNotes,
    addNote: addNote
}; 