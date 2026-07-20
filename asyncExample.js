const fs = require("fs");

// Read file asynchronously
fs.readFile("sample.txt", "utf8", (err, data) => {

    if (err) {
        console.log(err);
        return;
    }

    console.log(data);
});

// Executes immediately
console.log("Program Finished");