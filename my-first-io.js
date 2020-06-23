const fs = require('fs');

fileToRead = process.argv.slice(2);

let contents = fs.readFileSync(fileToRead, 'utf8');

const temp = contents.toString().split('\n');

console.log(temp.length - 1);
//The .length property will have one more element than the actual number of '\n' newlines.
//counting the elements AFTER the .split() function is called