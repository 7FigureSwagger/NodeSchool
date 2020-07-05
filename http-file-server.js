const http = require('http');
const fs = require('fs');

const input = process.argv.slice(2);

const server = http.createServer((req, res) => {
  console.log('server opened');
  const stream = fs.createReadStream(input[1])

  setTimeout(() => {
    stream.pipe(res);

    stream.close();
  }, 1000);

})

server.listen(input[0]);