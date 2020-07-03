const net = require('net');
const port = process.argv[2];

const server = net.createServer(function(socket){

  let data = '';
  let date = new Date();
  data += date.getFullYear() + '-';
  data += date.getMonth() + '-';
  data += date.getDate() + ' ';
  data += date.getHours() + ':'
  data += date.getMinutes();

  socket.end(data);
});
server.listen(port);
