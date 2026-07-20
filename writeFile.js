const fs = require("fs");

// Write data into a file
fs.writeFile(
    "sample.txt",
    "This file was created using Node.js.",
    (err) => {

        if (err) {
            console.log(err);
            return;
        }

        console.log("File written successfully.");
    }
);