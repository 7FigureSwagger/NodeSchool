const http = require('http');

const search = process.argv.slice(2);
search.forEach((url) => {
  console.log(url);
});

http.get(process.argv.slice(2), (res) => {
  

  res.on('data', (chunk) => {
    console.log(chunk)
  })


  res.end(console.log('end'))
}).on('error', console.error)