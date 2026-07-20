// Import the File System module
const fs = require("fs");

// Read the file asynchronously
fs.readFile("sample.txt", "utf8", (err, data) => {

    // Check if an error occurred
    if (err) {
        console.log("Error:", err);
        return;
    }

    // Display file content
    console.log("File Content:");
    console.log(data);
});