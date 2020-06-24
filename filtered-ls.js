const fs = require("fs");
const path = require("path");

const directoryInput = process.argv[2];
const fileExtension = process.argv[3];
console.log(fileExtension);

fs.readdir(directoryInput, (err, list) => {
	if (err) {
		console.log("error", err);
	} else {
    console.log("inside")
		list.forEach((i) => {
			if (path.extname(i) === fileExtension) {
				console.log(fileExtension);
				console.log(i);
			}
		});
	}
});
