const fs = require('fs');

let input = process.argv[2];

fs.readFile(input, 'utf8', (err, data) => {
  if(err){
    console.log('error', err);
  }
})
console.log(input);