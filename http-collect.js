const http = require("http");

http
	.get(process.argv[2], (res) => {
		let characterCount = 0;
		let recievedData = "";

		res.setEncoding("utf8");
		res.on("data", (chunk) => {
      characterCount += chunk.length;
      recievedData += chunk;
		});

		res.on("error", console.error);

		res.on("end", () => {
      console.log(characterCount);
      console.log(recievedData);
    });
	})
	.on("error", console.error);
