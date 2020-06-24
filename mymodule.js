const fs = require('fs');
const path = require('path');

const directoryInput = process.argv[2];
const fileType = process.argv[3];

fs.readdir(directoryInput, (err, list) => {
	if (err) {
		return err
	} else {
		list.forEach((file) => {
			if (path.extname(file) === "." + fileType) {
				return (file);
			}
		});
	}
});