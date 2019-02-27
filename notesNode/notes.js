console.log('starting notes.js');

var addNote = (title, body) => {
    console.log('Adding Note', title, body);
};
var getAll = () =>{
    console.log('Getting All the Notes');
};
var getNote = (title) =>{
    console.log('Getting the note', title);
};

module.exports ={
    addNote,
    getAll
}