const fs = require("fs");
const path = require("path");

//Must pass as an unnamed function, otherwise name it then pass it to the exports object
//IE. module.exports = function fR(dir, ext, callback)........
function fileReader(dir, ext, callback) {
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

module.exports = { fileReader };
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
