const fs = require('fs');
const chalk = require('chalk');



const getNotes = () => {
    return 'Your Notesss....'
}
const addNote = (title,body) => {
    //Loads in the notes. 
    const notes = loadNotes();
    //filter the array to check for duplicate titles.) 
    const duplicateNote = notes.find((note) => note.title === title)
    if (!duplicateNote){
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
const removeNote = (title) =>  {
    const notes = loadNotes()
    // Function gets called one time for each note in the notes array
    const notesToKeep = notes.filter((note) => note.title !== title)
    if (notes.length > notesToKeep.length){
        console.log(chalk.green.inverse('Note Removed'))
        saveNotes(notesToKeep)
    } else {
        console.log(chalk.red.inverse('No NOTE FOUND'))
    }
}
 const listNotes = () => {
     const notes = loadNotes()

     console.log(chalk.inverse('Your Notes'))

     notes.forEach((note) => {
         console.log(note.title)
     })
 }
 const readNote = (title) => {
     const notes = loadNotes()
     const note = notes.find((note) => note.title === title)
     if (note) {
         console.log(chalk.inverse(note.title))
         console.log(note.body)
     } else {
         console.log(chalk.red.inverse('NO NOTE WAS FOUND'))
     }
 }



const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}
//This Will Load Notes if the notes.json exists, if it doesnt then 
const loadNotes = () => {
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
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote, 
}; 