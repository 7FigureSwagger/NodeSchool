const http = require('http');


const server = http.createServer(() => {
  console.log('server opened');

  
});

server.listen(process.argv[2]);