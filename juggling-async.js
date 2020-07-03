const http = require("http");

const search = process.argv.slice(2);

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

Promise.all([
	handleDataCall(search[0]),
	handleDataCall(search[1]),
	handleDataCall(search[2]),
]).then((data) => {
	data.forEach((block) => {
    console.log(block);
  })
});

// ALTERNATE CODE TO DO THE SAME THING USING STREAM.PIPE()

// 'use strict'
//     const http = require('http')
//     const bl = require('bl')
//     const results = []
//     let count = 0
    
//     function printResults () {
//       for (let i = 0; i < 3; i++) {
//         console.log(results[i])
//       }
//     }
    
//     function httpGet (index) {
//       http.get(process.argv[2 + index], function (response) {
//         response.pipe(bl(function (err, data) {
//           if (err) {
//             return console.error(err)
//           }
    
//           results[index] = data.toString()
//           count++
    
//           if (count === 3) {
//             printResults()
//           }
//         }))
//       })
//     }
    
//     for (let i = 0; i < 3; i++) {
//       httpGet(i)
//     }

