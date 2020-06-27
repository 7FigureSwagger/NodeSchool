const fs = require("fs");
const path = require("path");

//Must pass as an unnamed function, otherwise name it then pass it to the exports object
//IE. module.exports = function [name](dir, ext, callback)........
module.exports = function (dir, ext, callback) {
	let filteredList = [];

	fs.readdir(dir, (err, data) => {
		if (err) {
			return callback(err);
		}

		data.forEach((file) => {
			if (path.extname(file) === "." + ext) {
				filteredList.push(file);
			}
		});
		callback(null, filteredList);
	});
}
