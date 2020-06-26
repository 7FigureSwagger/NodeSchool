const mymodule = require('./mymodule');
const { dir } = require('console');

const directoryInput = process.argv[2];
const fileType = process.argv[3];
// console.log(mymodule.readFile())

console.log(directoryInput);

mymodule(directoryInput, fileType, (err, data) => {
  if(err){console.log(err)};
  console.log('function call');
  console.log(data);
})