const fs = require('fs');


const book = {
    title: 'Ego Is the Enemy',
    author: 'Ryan Holloway'
}

 
const bookJSON = JSON.stringify(book);
fs.writeFileSync('1-json.json', bookJSON);



// //.stringify takes in the object and gives us a string back. 
// const bookJSON = JSON.stringify(book);
// console.log(bookJSON);

// //parsedData, will take a string and convert it into an object we can access. 
// const parsedData = JSON.parse(bookJSON);
// console.log(parsedData.author);

