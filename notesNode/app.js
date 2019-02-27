console.log('Starting app.js');
//Imports from Node
const fs = require('fs');
const _ = require('lodash');
// Local Requirements- Modules that ive created and am requiring.
const notes = require('./notes.js');


var filteredArray = _.uniq(['Mike']);
console.log(filteredArray);