const fs = require('fs');

// fs.writeFileSync('notes.txt','My Name is Marcus');

fs.appendFileSync('notes.txt', 'This is my second message');