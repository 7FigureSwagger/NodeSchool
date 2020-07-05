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

// Alternate solution

// const http = require('http')
// const fs = require('fs')

// const server = http.createServer(function (req, res) {
//   res.writeHead(200, { 'content-type': 'text/plain' })

//   fs.createReadStream(process.argv[3]).pipe(res)
// })

// server.listen(Number(process.argv[2]))