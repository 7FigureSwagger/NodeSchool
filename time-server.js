const net = require('net');
const port = process.argv[2];
const server = net.createServer(function(socket){
  console.log('server created');
});
server.listen(port);


console.log(process.argv[2]);