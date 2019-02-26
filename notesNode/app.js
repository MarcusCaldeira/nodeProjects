console.log('Starting APP');

const fs = require('fs');

fs.appendFileSync('greetings.txt', 'Hello World');