const fs = require("fs");
const path = require("path");

//create folder
// fs.mkdir(path.join(__dirname, '/test'), {}, err => {
//   if(err) throw err;
//   console.log('Folder created...');
// });

//create and write to file
// fs.writeFile(path.join(__dirname, '/test', 'Hello.txt'), 'Hello world!', err => {
//   if(err) throw err;
//   console.log('File written to...');

//   //file append
//   fs.appendFile(path.join(__dirname, '/test', 'Hello.txt'), 'I am working with node!', err => {
//     if(err) throw err;
//     console.log('File written to...');
//   });
// });

// //Read File
// fs.readFile(path.join(__dirname, '/test', 'Hello.txt'), 'utf8', (err, data) => {
//   if(err) throw err;
//   console.log(data);
// });

//rename file
fs.rename(
  path.join(__dirname, "/test", "Hello.txt"),
  path.join(__dirname, "/test", "HelloWorld.txt"),
  (err) => {
    if (err) throw err;
    console.log("File renamed ...");
  }
);
