const http = require("http");

const search = process.argv.slice(2);
console.log(search);

function handleDataCall(url) {
	let dataRecieved = "";

	return new Promise((resolve, reject) => {
		http
			.get(url, (res) => {
				res.setEncoding("utf8");

				res.on("data", (piece) => {
					dataRecieved += piece;
				});

				res.on("error", (error) => {
					reject(error);
				});
				res.on("end", () => {
					resolve(dataRecieved);
				});
			})
			.on("error", console.error);
	});
}

// for(let i = 0; i < search.length; i++) {
//   const promise = handleDataCall(search[i]).then(() => {
//     console.log('done');
//   })
// }

handleDataCall(search[0]).then((res) => {
	console.log(res);
});
