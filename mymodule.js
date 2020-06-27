const fs = require("fs");
const path = require("path");

//Must pass as an unnamed function, otherwise name it then pass it to the exports object
//IE. module.exports = function [name](dir, ext, callback)........
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
