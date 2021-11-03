const path = require("path");
console.log(path.sep);
// join using path separator
const file_path = path.join("directory", "data.txt");
console.log(file_path);
// to get absolute path
const abs = path.resolve("directory", "data.txt");
console.log(abs);
console.log(path.basename(file_path));
