console.log('Starting app.js');

const fs = require('fs');
const os = require('os');
const _ = require('lodash');
const notes = require('./notes.js');


var filteredArray = _.uniq(['Marcus', 1, 'Marcus',1,3,4,5]);
console.log(filteredArray);
// console.log(_.isString(true));
// console.log(_.isString('Andrewnode'));


// var user = os.userInfo();


// fs.appendFileSync('greetings.txt', `Hello ${user.username} ! You are ${notes.age}.`);