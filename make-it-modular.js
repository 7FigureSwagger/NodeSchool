// const mymodule = require('./mymodule');
import fileRead from './mymodule.js'; 


const directoryInput = process.argv[2];
const fileType = process.argv[3];

console.log(fileRead);


// mymodule.readFile(directoryInput, fileType, (err, data) => {
//   if(err){console.log(err)};
//   console.log('function call');
//   console.log(data);
// })