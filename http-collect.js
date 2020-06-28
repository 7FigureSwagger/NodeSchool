const http = require('http');


http.get(process.argv[2], () => {
  console.log('get');
});