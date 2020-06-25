const fs = require("fs");
const path = require("path");

const directoryInput = process.argv[2];
const fileType = process.argv[3];



function readFile(dir, ext, callback){
  let filteredList = [];
  (dir, ext) => {
    fs.readdir(dir, (err, data) => {
      if(err){return callback(err)};
      data.forEach((file) => {
        // if(path.extname(file))
        filteredList.push(file);
      });
    });
  }; 

  callback(null, filteredList);
}



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
