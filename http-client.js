const http = require('http');

const urlSearch = process.argv[2];
console.log(urlSearch);

http.get(urlSearch, (res) => {
 
  res.setEncoding('utf-8');
  let rawData = '';

  res.on('data', (chunk) => {
    chunk += rawData;
  })

  console.log(rawData);
})