const fileReader = require("./mymodule");
const directoryInput = process.argv[2];
const fileType = process.argv[3];

fileReader(directoryInput, fileType, (err, data) => {
  if(err){
    console.log("An error reading the files has occurred", err);
  };

  data.forEach((file) => {
    console.log(file);
  })
})