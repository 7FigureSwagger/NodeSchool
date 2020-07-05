const http = require("http");

const server = http.createServer((req, res) => {
	console.log("server opened");
	res.writeHead("200", { "content-type": "text/plain" });

	setTimeout(() => {
		let test = "";
		req.on("data", (d) => {
      console.log(d.toString().toUpperCase());
      
		});
		// req.pipe(test);
	}, 100);
});

server.listen(process.argv[2]);
