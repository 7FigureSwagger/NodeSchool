const fs = require("fs");
const path = require("path");

const directoryInput = process.argv[2];
const fileType = process.argv[3];

function readData(directoryInput, fileType, callBack){
  
}




fs.readdir(directoryInput, () => {
  function readData(err, data) => {
    if(err){ return readData(null, data)}
    
  }
});
