const http = require('http');

const urlSearch = process.argv[2];
console.log(urlSearch);

http.get(urlSearch, (res) => {
  
  res.setEncoding('utf8');
  let recievedData = '';

  res.on('data', (chunk) => {
    rawData += chunk;
    console.log(chunk);
  })
  res.on('end', () => {
    console.log(recievedData);
    //Only need to do the following if response is not JSON
    // try {
    //   const parsedData = JSON.parse(rawData);
    //   console.log(parsedData);
      
    // } catch (error) {
    //   console.log('parsing error ', error);
    // }
  })

}).on('error', (e) => {console.error('got error', e)});