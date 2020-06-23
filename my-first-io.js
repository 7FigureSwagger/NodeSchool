const fs = require('fs');

fileToRead = process.argv.slice(2);
console.log(fileToRead);

const contents = fs.readFileSync(fileToRead.toString());

console.log('contents', contents.toString());

contents