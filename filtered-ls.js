const fs = require("fs");
const path = require("path");

const directoryInput = process.argv[2];
const fileExtension = process.argv[3];

fs.readdir(directoryInput, (err, list) => {
	if (err) {
		console.log("error", err);
	} else {
		list.forEach((file) => {
			if (path.extname(file) === "." + fileExtension) {
				console.log(file);
			}
		});
	}
});
