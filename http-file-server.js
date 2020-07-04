const http = require('http');
const input = process.argv.slice(2);

console.log(input);

const server = http.createServer((req, res) => {
  console.log('server opened');
})

server.listen(input[0]);