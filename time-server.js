const net = require('net');
const port = process.argv[2];

const server = net.createServer(function(socket){

  console.log('server created');
  let data = '';
  let date = new Date();
  data += date.getFullYear() + '-';
  data += date.getMonth() + '-';
  data += date.getDate();
  console.log('data', data);
  socket.end(data);
});
server.listen(port);
