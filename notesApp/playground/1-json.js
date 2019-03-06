const fs = require('fs');

//Load The Data IN
const dataBuffer = fs.readFileSync('1-json.json');
//Convert the data into a string. 
const dataJSON = dataBuffer.toString();
//Parse the data into JSON data. 
const user = JSON.parse(dataJSON);

//Changed the data in the JSON Parse. 
user.name =('Marcus');
user.age = (28);


const userJSON = JSON.stringify(user)
fs.writeFileSync('1-json.json', userJSON)








//  //Read the file getting binary data
// const dataBuffer = fs.readFileSync('1-json.json')
// // turned the binary data into a string in js. 
// const dataJson = dataBuffer.toString()
// //Then parsed string data into json data,
// const data = JSON.parse(dataJson);
// //Then we accessed it by using properties of that object.  
// console.log(data.title);


// const book = {
//     title: 'Ego Is the Enemy',
//     author: 'Ryan Holloway'
// }

 
// const bookJSON = JSON.stringify(book);
// //Writes to the file
// fs.writeFileSync('1-json.json', bookJSON);



// //.stringify takes in the object and gives us a string back. 
// const bookJSON = JSON.stringify(book);
// console.log(bookJSON);

// //parsedData, will take a string and convert it into an object we can access. 
// const parsedData = JSON.parse(bookJSON);
// console.log(parsedData.author);

