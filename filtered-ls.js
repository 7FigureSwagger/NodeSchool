const fs = require("fs");
const path = require("path");

const directoryInput = process.argv[2];
const fileExtension = process.argv[3];

console.log(
	fs.readdir(directoryInput, (err, list) => {
		if (err) {
			console.log("error", err);
		} else {
      console.log(list);
		}
	})
);
