const fs = require("fs");
const path = require("path");

const directoryInput = process.argv[2];
const fileType = process.argv[3];

fs.readdir(directoryInput, () => {});
