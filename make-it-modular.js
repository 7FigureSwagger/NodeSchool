const mymodule = require('./mymodule');

const directoryInput = process.argv[2];
const fileType = process.argv[3];
console.log(mymodule.readFile())
// mymodule(directoryInput, fileType, (err, data) => {
//   if(err){console.log(err)};

//   console.log(data);
// })