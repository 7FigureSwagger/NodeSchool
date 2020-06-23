const fs = require('fs');

let input = process.argv[2];

//Take input, set encoding to avoid using toString() as before, pass in callback to collect the data asynchronously, handle errors
fs.readFile(input, 'utf8', (err, data) => {
  if(err){
    console.log('error', err);
  } else {
    console.log(data.split('\n').length - 1);
  }
});

