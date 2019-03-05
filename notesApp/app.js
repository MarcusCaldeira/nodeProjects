//Store the contents of Validator in validator variable. 
const validator = require('validator');


const getNotes = require('./notes.js')
const msg = getNotes()

console.log(msg)

console.log(validator.isEmail('Marcus@example.com'))