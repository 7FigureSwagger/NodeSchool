const fs = require("fs");
const path = require("path");

export function fileRead(dir, ext, callback) {
	let filteredList = [];

	fs.readdir(dir, (err, data) => {
		if (err) {
			return callback(err, data);
		}

		data.forEach((file) => {
			if (path.extname(file) === ext) {
				filteredList.push(file);
			}
		});
		callback(null, filteredList);
	});
}


// function readData(directory, extension, (e) => {console.log(e)}) {
//   let filteredList = [];

//   fs.readdir(directory, (err, list) => {
//     if (err) {
//       return (err) => {};
// 		}

// 		list.forEach((file) => {
// 			if (path.extname(file) === "." + extension) {
// 				filteredList.push(file);
// 				console.log(filteredList);
// 			}
//     });

//     callback(filteredList);

//   });
//   // return filteredList;

// }

// fs.readdir(directoryInput, () => {
//   function readData(err, data) => {
//     if(err){ return readData(null, data)}

//   }
// });
