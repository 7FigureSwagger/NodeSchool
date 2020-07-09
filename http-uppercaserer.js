const http = require("http");
const map = require('through2-map');

const server = http.createServer((req, res) => {
	console.log("server opened");
	res.writeHead("200", { "content-type": "text/plain" });

	req.pipe(map((chunk) => {
		return chunk.toString().toUpperCase();
	})).pipe(res);

});

server.listen(process.argv[2]);


// Best Way to write this

//     const http = require('http')
//     const map = require('through2-map')
    
//     const server = http.createServer(function (req, res) {
//       if (req.method !== 'POST') {
//         return res.end('send me a POST\n')
//       }
    
//       req.pipe(map(function (chunk) {
//         return chunk.toString().toUpperCase()
//       })).pipe(res)
//     })
    
//     server.listen(Number(process.argv[2]))