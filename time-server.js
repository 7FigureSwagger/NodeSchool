const net = require('net');
const port = process.argv[2];


function zeroFill (i) {
    //Checks if month or date is less than 10 and adds a 0 to it 
    return (i < 10 ? '0' : '') + i
}

const server = net.createServer(function(socket){
let data = '';
  let date = new Date();
  data += date.getFullYear() + '-';
  data += zeroFill(date.getMonth() + 1) + '-';
  data += zerFill(date.getDate()) + ' ';
  data += date.getHours() + ':'
  data += date.getMinutes() + '\n';
  socket.write(data);
  socket.end();
});

server.listen(port);


// Using function call for date


// function now () {
//   const d = new Date()
//   return d.getFullYear() + '-' +
//     zeroFill(d.getMonth() + 1) + '-' +
//     zeroFill(d.getDate()) + ' ' +
//     zeroFill(d.getHours()) + ':' +
//     zeroFill(d.getMinutes())
// }

// const server = net.createServer(function (socket) {
//   socket.end(now() + '\n')
// })

// Type Casting input to integer for port
// server.listen(Number(process.argv[2]))