const fs = require("fs");

// Read file synchronously
const data = fs.readFileSync("sample.txt", "utf8");

// Display file content
console.log(data);

// This line executes after reading finishes
console.log("Program Finished");