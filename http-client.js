const http = require('http');

const urlSearch = process.argv[2];

http.get(urlSearch, (res) => {
  
  res.setEncoding('utf8');
  let recievedData = '';

  //Catch data as its passed in the response
  res.on('data', (chunk) => {
    recievedData += chunk;
    console.log(chunk);
  })
  // res.on('end', () => {
    // console.log(recievedData);
    //Only need to do the following if response is not JSON
    // try {
    //   const parsedData = JSON.parse(rawData);
    //   console.log(parsedData);
      
    // } catch (error) {
    //   console.log('parsing error ', error);
    // }
  // })

}).on('error', (e) => {console.error('got error', e)});