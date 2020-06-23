const fs = require('fs');

fileToRead = process.argv.slice(2);
//Ends up being an array, would require typecast to string, better to select the array element directly if input neede is only one string

let contents = fs.readFileSync(process.argv[2], 'utf8');
//Add 'utf8' as the second argument to fs to avoid having to use .toString()
// fs.readFileSync(process.argv[2], 'utf8').split('\n').length - 1
const lines = contents.split('\n').length - 1;

console.log(lines);
//The .length property will have one more element than the actual number of '\n' newlines.
//counting the elements AFTER the .split() function is called
