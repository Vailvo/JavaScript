console.log("Hello from Node.js")
const fs = require('fs');
console.log("Hello from the other side.")
// fs is file system
// Declaring fs as a const to import files
fs.writeFileSync('hello.txt', "Hello from Node.js")
// this one takes in the file path