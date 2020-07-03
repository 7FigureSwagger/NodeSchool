const net = require('net');
const port = process.argv[2];
const server = net.createServer(function(socket){

  let data = '';
  let date = new Date();
  data += date.getFullYear() + '-0';
  data += (date.getMonth() + 1) + '-0';
  data += date.getDate() + ' ';
  data += date.getHours() + ':'
  data += date.getMinutes() + '\n';
  socket.write(data);
  socket.end();
});
server.listen(port);
