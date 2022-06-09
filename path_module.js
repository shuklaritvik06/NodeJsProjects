const path = require('path');
console.log(path.dirname(__dirname)) // Prints the parent directory path
console.log(path.basename(__dirname)); // Prints the current directory name
console.log(path.extname(__filename)); // Print the file extension in which the code is written
console.log(__dirname)  // Prints the current directory path
console.log(__filename) // Prints the current file path
console.log(path.join(__dirname, 'index.js')); // Joins the given path
console.log(path.resolve('..','partials', 'index.js')); // Resolves the given path
console.log(path.parse(__filename)); // Parses the given path and returns an object containing the directory, file name, extension and the full path of the file
console.log(path.relative(__dirname, __filename)); // Returns the relative path between the given paths
